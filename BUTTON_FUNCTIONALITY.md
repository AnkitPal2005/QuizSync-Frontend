# Button Functionality Guide

## 🎯 Overview

This document explains how to make all buttons in the QuizSync application functional. Since this is a frontend-only application without a backend, we'll use:

1. **Client-side state management** for immediate feedback
2. **Toast notifications** for user feedback
3. **Local storage** for persistence (optional)
4. **Mock API calls** that can be replaced with real APIs later

---

## 🔧 Implementation Strategy

### 1. Toast Notifications (✅ Implemented)

Location: `src/hooks/useToast.ts` and `src/components/shared/Toast.tsx`

Usage:
```typescript
import { useToast } from '@/hooks';
import { ToastContainer } from '@/components/shared';

const { toasts, success, error, info, removeToast } = useToast();

// Show success message
success('Candidate invited successfully!');

// Show error message
error('Failed to export data');

// Render toast container
<ToastContainer toasts={toasts} onClose={removeToast} />
```

### 2. Button Actions by Category

---

## 📋 Navigation Buttons

### Already Working:
- ✅ Sidebar navigation (Dashboard, Assessments, etc.)
- ✅ Breadcrumb links
- ✅ "View Profile" buttons
- ✅ "View Assessment" buttons

### Implementation:
```typescript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Using Link component
<Link href="/dashboard">
  <button>Go to Dashboard</button>
</Link>

// Using router programmatically
const router = useRouter();
const handleClick = () => {
  router.push('/assessments');
};
```

---

## 🔍 Search & Filter Buttons

### Candidates Page Example:

```typescript
const [searchQuery, setSearchQuery] = useState('');
const [filterStatus, setFilterStatus] = useState('all');
const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

// Search functionality
const filteredCandidates = candidates.filter(candidate => {
  const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       candidate.email.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesFilter = filterStatus === 'all' || candidate.status === filterStatus;
  return matchesSearch && matchesFilter;
});

// Clear filters
const handleClearFilters = () => {
  setSearchQuery('');
  setFilterStatus('all');
  success('Filters cleared');
};
```

---

## 📤 Export Buttons

### Implementation:

```typescript
const handleExport = (format: 'csv' | 'pdf' | 'excel') => {
  try {
    // Prepare data
    const data = filteredCandidates.map(c => ({
      Name: c.name,
      Email: c.email,
      Status: c.status,
      Score: c.score || 'N/A',
    }));

    if (format === 'csv') {
      // Convert to CSV
      const csv = convertToCSV(data);
      downloadFile(csv, 'candidates.csv', 'text/csv');
    }

    success(`Exported ${data.length} candidates as ${format.toUpperCase()}`);
  } catch (error) {
    error('Failed to export data');
  }
};

// Helper functions
function convertToCSV(data: any[]) {
  const headers = Object.keys(data[0]).join(',');
  const rows = data.map(row => Object.values(row).join(','));
  return [headers, ...rows].join('\\n');
}

function downloadFile(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
```

---

## ✉️ Invite Candidates Button

### Implementation:

```typescript
const [showInviteModal, setShowInviteModal] = useState(false);
const [inviteEmails, setInviteEmails] = useState('');

const handleInvite = () => {
  const emails = inviteEmails.split(',').map(e => e.trim()).filter(Boolean);
  
  if (emails.length === 0) {
    error('Please enter at least one email address');
    return;
  }

  // Validate emails
  const invalidEmails = emails.filter(email => !isValidEmail(email));
  if (invalidEmails.length > 0) {
    error(`Invalid emails: ${invalidEmails.join(', ')}`);
    return;
  }

  // Mock API call
  setTimeout(() => {
    success(`Invited ${emails.length} candidate(s) successfully!`);
    setShowInviteModal(false);
    setInviteEmails('');
  }, 500);
};

function isValidEmail(email: string) {
  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}
```

---

## ✅ Checkbox Selection

### Bulk Actions:

```typescript
const [selectedCandidates, setSelectedCandidates] = useState<number[]>([]);

// Select all
const handleSelectAll = (checked: boolean) => {
  if (checked) {
    setSelectedCandidates(filteredCandidates.map(c => c.id));
  } else {
    setSelectedCandidates([]);
  }
};

// Select individual
const handleSelectCandidate = (id: number, checked: boolean) => {
  if (checked) {
    setSelectedCandidates([...selectedCandidates, id]);
  } else {
    setSelectedCandidates(selectedCandidates.filter(cid => cid !== id));
  }
};

// Bulk delete
const handleBulkDelete = () => {
  if (selectedCandidates.length === 0) {
    warning('Please select candidates to delete');
    return;
  }

  if (confirm(`Delete ${selectedCandidates.length} candidate(s)?`)) {
    // Mock delete
    success(`Deleted ${selectedCandidates.length} candidate(s)`);
    setSelectedCandidates([]);
  }
};
```

---

## 📝 Form Submissions

### Settings Page Example:

```typescript
const [formData, setFormData] = useState({
  companyName: 'QuizSync Inc.',
  website: 'https://quizsync.com',
  timezone: 'Pacific Time (PT)',
  language: 'English (US)',
});

const [hasChanges, setHasChanges] = useState(false);

const handleChange = (field: string, value: string) => {
  setFormData({ ...formData, [field]: value });
  setHasChanges(true);
};

const handleSave = async () => {
  try {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    success('Settings saved successfully!');
    setHasChanges(false);
  } catch (err) {
    error('Failed to save settings');
  }
};

const handleCancel = () => {
  // Reset to original values
  setFormData({
    companyName: 'QuizSync Inc.',
    website: 'https://quizsync.com',
    timezone: 'Pacific Time (PT)',
    language: 'English (US)',
  });
  setHasChanges(false);
  info('Changes discarded');
};
```

---

## 🔄 Toggle Switches

### Notifications Example:

```typescript
const [notifications, setNotifications] = useState({
  email: true,
  push: false,
  sms: false,
});

const handleToggle = (key: keyof typeof notifications) => {
  const newValue = !notifications[key];
  setNotifications({ ...notifications, [key]: newValue });
  
  success(`${key.charAt(0).toUpperCase() + key.slice(1)} notifications ${newValue ? 'enabled' : 'disabled'}`);
};
```

---

## 📊 Pagination

### Implementation:

```typescript
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const currentItems = filteredCandidates.slice(startIndex, endIndex);

const handlePageChange = (page: number) => {
  if (page < 1 || page > totalPages) return;
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

---

## 🎨 Modal Dialogs

### Invite Modal Example:

```typescript
const [showModal, setShowModal] = useState(false);

// Modal Component
function InviteModal({ isOpen, onClose, onInvite }: Props) {
  const [emails, setEmails] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-lg font-bold mb-4">Invite Candidates</h3>
        <textarea
          value={emails}
          onChange={(e) => setEmails(e.target.value)}
          placeholder="Enter email addresses (comma-separated)"
          className="w-full border rounded p-2 mb-4"
          rows={4}
        />
        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button 
            onClick={() => onInvite(emails)} 
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            Send Invites
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 🔐 Authentication Actions

### Login/Signup:

```typescript
const handleLogin = async (email: string, password: string) => {
  try {
    // Validate inputs
    if (!email || !password) {
      error('Please fill in all fields');
      return;
    }

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Store auth token (mock)
    localStorage.setItem('auth-token', 'mock-token-123');
    localStorage.setItem('user-role', 'admin');

    success('Login successful!');
    router.push('/dashboard');
  } catch (err) {
    error('Invalid credentials');
  }
};

const handleLogout = () => {
  localStorage.removeItem('auth-token');
  localStorage.removeItem('user-role');
  success('Logged out successfully');
  router.push('/login');
};
```

---

## 📈 Assessment Actions

### Create Assessment:

```typescript
const handleCreateAssessment = () => {
  router.push('/assessments/new');
  info('Creating new assessment...');
};

const handlePublishAssessment = (id: number) => {
  if (confirm('Publish this assessment?')) {
    success('Assessment published successfully!');
    // Update status
  }
};

const handleDuplicateAssessment = (id: number) => {
  success('Assessment duplicated!');
  // Create copy
};

const handleDeleteAssessment = (id: number) => {
  if (confirm('Delete this assessment? This action cannot be undone.')) {
    success('Assessment deleted');
    // Remove from list
  }
};
```

---

## 🎯 Quick Implementation Checklist

### For Each Button:

1. **Identify the action** - What should happen?
2. **Add state if needed** - Modal open/close, loading, etc.
3. **Add handler function** - Handle the click event
4. **Show feedback** - Toast notification
5. **Update UI** - Reflect changes immediately
6. **Add loading state** - Show spinner if async

### Example Template:

```typescript
const [isLoading, setIsLoading] = useState(false);

const handleAction = async () => {
  setIsLoading(true);
  try {
    // Perform action
    await mockApiCall();
    success('Action completed!');
  } catch (error) {
    error('Action failed');
  } finally {
    setIsLoading(false);
  }
};

<button 
  onClick={handleAction}
  disabled={isLoading}
  className="px-4 py-2 bg-indigo-600 text-white rounded"
>
  {isLoading ? 'Loading...' : 'Click Me'}
</button>
```

---

## 🚀 Next Steps

1. **Add Toast to each page** - Import and use useToast hook
2. **Implement handlers** - Add onClick handlers to buttons
3. **Add modals** - Create modal components for complex actions
4. **Add loading states** - Show spinners during async operations
5. **Add validation** - Validate user inputs
6. **Test thoroughly** - Click every button and verify behavior

---

## 📚 Resources

- Toast Hook: `src/hooks/useToast.ts`
- Toast Component: `src/components/shared/Toast.tsx`
- Routing Hook: `src/hooks/useRouting.ts`
- Validation Utils: `src/lib/validations.ts`

---

## 💡 Pro Tips

1. **Always show feedback** - Users need to know their action worked
2. **Confirm destructive actions** - Use confirm() for delete operations
3. **Disable during loading** - Prevent double-clicks
4. **Validate inputs** - Check before submitting
5. **Handle errors gracefully** - Show helpful error messages
6. **Keep it simple** - Don't overcomplicate mock implementations

---

**Note:** All implementations are client-side mocks. Replace with actual API calls when backend is ready!
