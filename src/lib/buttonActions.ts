// Common button action handlers

export const buttonActions = {
  // Export data as CSV
  exportToCSV: (data: any[], filename: string = 'export.csv') => {
    try {
      if (data.length === 0) {
        throw new Error('No data to export');
      }

      const headers = Object.keys(data[0]).join(',');
      const rows = data.map(row => 
        Object.values(row).map(val => 
          typeof val === 'string' && val.includes(',') ? `"${val}"` : val
        ).join(',')
      );
      
      const csv = [headers, ...rows].join('\\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      return true;
    } catch (error) {
      console.error('Export failed:', error);
      return false;
    }
  },

  // Copy to clipboard
  copyToClipboard: async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Copy failed:', error);
      return false;
    }
  },

  // Download file
  downloadFile: (content: string, filename: string, type: string = 'text/plain') => {
    try {
      const blob = new Blob([content], { type });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);
      return true;
    } catch (error) {
      console.error('Download failed:', error);
      return false;
    }
  },

  // Share via Web Share API
  share: async (data: { title?: string; text?: string; url?: string }) => {
    try {
      if (navigator.share) {
        await navigator.share(data);
        return true;
      } else {
        // Fallback: copy URL to clipboard
        if (data.url) {
          await navigator.clipboard.writeText(data.url);
          return true;
        }
        return false;
      }
    } catch (error) {
      console.error('Share failed:', error);
      return false;
    }
  },

  // Print page
  print: () => {
    try {
      window.print();
      return true;
    } catch (error) {
      console.error('Print failed:', error);
      return false;
    }
  },

  // Validate email
  isValidEmail: (email: string) => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  },

  // Format date
  formatDate: (date: Date | string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  },

  // Confirm action
  confirmAction: (message: string) => {
    return window.confirm(message);
  },
};
