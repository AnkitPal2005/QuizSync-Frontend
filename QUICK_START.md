# QuizSync - Quick Start Guide

## 🚀 Development Access

### Direct URLs (Development Mode)

Since authentication is bypassed in development mode, you can directly access any route:

#### 🏠 Public Pages
```
Landing Page:        http://localhost:3000/
Login:              http://localhost:3000/login
Signup:             http://localhost:3000/signup
Forgot Password:    http://localhost:3000/forgot-password
```

#### 👨‍💼 Admin Pages (Protected in Production)
```
Dashboard:          http://localhost:3000/dashboard
Assessments:        http://localhost:3000/assessments
Assessment Detail:  http://localhost:3000/assessments/1
Question Bank:      http://localhost:3000/question-bank
Onboarding:         http://localhost:3000/onboarding
```

#### 📝 Assessment Flow (Candidate)
```
Join Assessment:    http://localhost:3000/assessment
Identity:           http://localhost:3000/assessment/identity
System Check:       http://localhost:3000/assessment/system-check
Instructions:       http://localhost:3000/assessment/instructions
Ready:              http://localhost:3000/assessment/ready
Coding:             http://localhost:3000/assessment/coding
Submitted:          http://localhost:3000/assessment/submitted
```

---

## 🎯 Quick Access Methods

### Method 1: Landing Page Buttons (Bottom Right)

On the landing page (`http://localhost:3000/`), you'll see two floating buttons at the bottom right:

1. **"View Assessment"** → Takes you to `/assessments/1`
2. **"Dashboard"** → Takes you to `/dashboard`

### Method 2: Direct URL

Simply type in your browser:
```
http://localhost:3000/dashboard
```

### Method 3: Navbar Links

From any page, use the navbar:
- Click "Get Started" → Signup page
- Click "Log in" → Login page

---

## 🔧 Development Setup

### 1. Start Development Server

```bash
cd quizsync-frontend
npm run dev
```

Server will start at: `http://localhost:3000`

### 2. Access Dashboard

**Option A: Direct URL**
```
http://localhost:3000/dashboard
```

**Option B: From Landing Page**
1. Go to `http://localhost:3000/`
2. Click "Dashboard" button (bottom right)

**Option C: From Navbar**
1. Click "Get Started" or "Log in"
2. You'll see the login/signup pages
3. Manually change URL to `/dashboard`

---

## 📋 Common Routes

### Admin Workflow
```
1. Dashboard        → Overview and stats
2. Assessments      → Manage assessments
3. Question Bank    → Manage questions
4. Candidates       → View candidates
5. Reports          → Analytics
```

### Candidate Workflow
```
1. /assessment              → Enter code
2. /assessment/identity     → Verify identity
3. /assessment/system-check → Check system
4. /assessment/instructions → Read rules
5. /assessment/ready        → Get ready
6. /assessment/coding       → Take test
7. /assessment/submitted    → Confirmation
```

---

## 🔐 Authentication (Development)

### Current Status
- ✅ Authentication is **BYPASSED** in development mode
- ✅ All routes are accessible without login
- ✅ No cookies or tokens required

### How It Works
```typescript
// In src/middleware.ts
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  // Allow all routes
  return NextResponse.next();
}
```

### For Production
When deploying to production:
1. Remove the development bypass
2. Implement proper authentication
3. Set up JWT tokens or session management
4. Configure cookies for auth state

---

## 🎨 UI Components

### Sidebar Navigation (Admin Pages)

On admin pages, you'll see a sidebar with:
- Dashboard
- Assessments
- Question Bank
- Candidates
- Reports
- Settings

Click any item to navigate.

### Assessment Progress Bar

On assessment pages, you'll see a progress bar showing:
- Current step
- Total steps
- Progress percentage
- Step indicators

---

## 🐛 Troubleshooting

### Can't Access Dashboard?

**Problem:** Getting redirected or seeing errors

**Solutions:**

1. **Check if dev server is running**
   ```bash
   npm run dev
   ```

2. **Clear browser cache**
   - Press `Ctrl + Shift + Delete`
   - Clear cached images and files
   - Reload page

3. **Check middleware**
   - Open `src/middleware.ts`
   - Ensure `isDevelopment` check is present
   - Verify `NODE_ENV` is 'development'

4. **Restart dev server**
   ```bash
   # Stop server (Ctrl+C)
   npm run clean
   npm run dev
   ```

5. **Check console for errors**
   - Open browser DevTools (F12)
   - Check Console tab
   - Look for any error messages

### Page Not Found (404)?

**Problem:** Getting 404 error

**Solutions:**

1. **Check URL spelling**
   - Correct: `/dashboard`
   - Wrong: `/dashbord`, `/Dashboard`

2. **Verify file exists**
   ```
   src/app/dashboard/page.tsx should exist
   ```

3. **Restart dev server**
   ```bash
   npm run dev
   ```

### Middleware Redirecting?

**Problem:** Being redirected to login

**Solutions:**

1. **Check NODE_ENV**
   ```bash
   echo $NODE_ENV  # Should be 'development'
   ```

2. **Verify middleware bypass**
   - Open `src/middleware.ts`
   - Check if development bypass is active

3. **Temporarily disable middleware**
   - Comment out middleware config
   - Or remove middleware.ts temporarily

---

## 📱 Mobile Access

### On Same Network

1. **Find your IP address**
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. **Access from mobile**
   ```
   http://YOUR_IP:3000/dashboard
   Example: http://192.168.1.100:3000/dashboard
   ```

---

## 🔄 Hot Reload

Changes to files will automatically reload:
- ✅ Component changes
- ✅ Style changes
- ✅ Route changes

**Note:** Middleware changes may require manual restart.

---

## 📊 Available Pages

### ✅ Fully Implemented
- [x] Landing Page
- [x] Login Page
- [x] Signup Page
- [x] Forgot Password
- [x] Onboarding
- [x] Dashboard
- [x] Assessments List
- [x] Assessment Detail
- [x] Question Bank
- [x] Assessment Join
- [x] Assessment Identity
- [x] Assessment System Check
- [x] Assessment Instructions
- [x] Assessment Ready
- [x] Assessment Coding
- [x] Assessment Submitted

### 🚧 To Be Implemented
- [ ] Candidates Page (route exists, needs content)
- [ ] Reports Page (route exists, needs content)
- [ ] Settings Page (route exists, needs content)

---

## 🎯 Next Steps

1. **Explore Dashboard**
   - View stats and charts
   - Check active assessments
   - Review recent activity

2. **Create Assessment**
   - Go to Assessments page
   - Click "New Assessment"
   - Add questions from Question Bank

3. **Test Assessment Flow**
   - Go to `/assessment`
   - Follow the complete flow
   - Test coding interface

4. **Customize**
   - Update colors in `tailwind.config.ts`
   - Modify components in `src/components/`
   - Add new routes in `src/app/`

---

## 📚 Related Documentation

- [Project Structure](./PROJECT_STRUCTURE.md)
- [Routing Guide](./ROUTING.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [README](./README.md)

---

## 💡 Pro Tips

1. **Use Browser Bookmarks**
   - Bookmark frequently used routes
   - Example: `http://localhost:3000/dashboard`

2. **Use Browser DevTools**
   - F12 to open DevTools
   - Check Network tab for API calls
   - Use React DevTools extension

3. **Use VS Code Extensions**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Auto Rename Tag

4. **Keep Terminal Open**
   - Watch for errors
   - See hot reload status
   - Monitor build times

---

## 🆘 Need Help?

If you're still having issues:

1. Check the console for errors
2. Review the [ROUTING.md](./ROUTING.md) file
3. Check [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
4. Restart the development server
5. Clear browser cache and cookies

---

**Happy Coding! 🚀**
