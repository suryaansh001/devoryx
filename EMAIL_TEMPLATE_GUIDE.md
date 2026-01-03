# Erebor Email Template - Usage Guide

## 🎨 Design System Alignment

This email template perfectly matches your website's design:

- **Colors**: Black background (#000000), white text, glassmorphism effects
- **Typography**: System fonts with proper fallbacks for email compatibility
- **Buttons**: Gradient white buttons with hover effects (simulated in email)
- **Layout**: Clean, modern design with rounded corners and proper spacing
- **Responsive**: Mobile-optimized with media queries

## 📧 Template Structure

### Replaceable Content Placeholders:

```
[LOGO_IMAGE_URL]              → Your logo image URL
[EMAIL_SUBJECT_LINE]          → Email subject (also used as H1)
[MAIN_HEADING]                → Main headline text
[GRADIENT_TEXT_PORTION]       → Text that gets gradient styling
[SUBHEADING_TEXT]             → Subtitle/description
[MAIN_CONTENT_PARAGRAPH_1]    → First paragraph
[MAIN_CONTENT_PARAGRAPH_2]    → Second paragraph
[MAIN_CONTENT_PARAGRAPH_3]    → Third paragraph
[CONTENT_IMAGE_URL]           → Main content image
[IMAGE_ALT_TEXT]              → Alt text for image
[PRIMARY_BUTTON_TEXT]         → Main CTA button text
[PRIMARY_BUTTON_URL]          → Main CTA button link
[SECONDARY_BUTTON_TEXT]       → Secondary button text
[SECONDARY_BUTTON_URL]        → Secondary button link
[FOOTER_TEXT]                 → Footer message
[WEBSITE_URL]                 → Link to your website
[UNSUBSCRIBE_URL]             → Unsubscribe link
```

## 🚀 Quick Start Examples

### 1. **Project Proposal Email**
```
[EMAIL_SUBJECT_LINE]         → Project Proposal: Custom AI Solution
[MAIN_HEADING]               → Let's Build Your
[GRADIENT_TEXT_PORTION]      → AI-Powered Solution
[SUBHEADING_TEXT]            → We've analyzed your requirements and prepared a custom solution
[PRIMARY_BUTTON_TEXT]        → View Full Proposal
[SECONDARY_BUTTON_TEXT]      → Schedule Call
```

### 2. **Welcome Email**
```
[EMAIL_SUBJECT_LINE]         → Welcome to Erebor
[MAIN_HEADING]               → Welcome to
[GRADIENT_TEXT_PORTION]      → Erebor
[SUBHEADING_TEXT]            → Your journey to custom software solutions starts here
[PRIMARY_BUTTON_TEXT]        → Explore Services
[SECONDARY_BUTTON_TEXT]      → View Portfolio
```

### 3. **Newsletter/Follow-up**
```
[EMAIL_SUBJECT_LINE]         → Latest Updates from Erebor
[MAIN_HEADING]               → What's New at
[GRADIENT_TEXT_PORTION]      → Erebor
[SUBHEADING_TEXT]            → Discover our latest projects and insights
[PRIMARY_BUTTON_TEXT]        → Read More
[SECONDARY_BUTTON_TEXT]      → Contact Us
```

## 📱 Email Client Compatibility

✅ **Fully Compatible With:**
- Gmail (Web & Mobile)
- Outlook (Web & Desktop)
- Apple Mail
- Yahoo Mail
- iOS Mail
- Android Mail

## 🎯 Key Features

### Interactive Elements
- **Primary Button**: Gradient white button with shadow effects
- **Secondary Button**: Glassmorphism style with border
- **Hover Effects**: Simulated with CSS transitions
- **Responsive Design**: Adapts to mobile screens

### Visual Elements
- **Glass Card**: Semi-transparent background with blur effect
- **Gradient Text**: Matches your website's gradient styling
- **Rounded Corners**: Consistent with your design system
- **Proper Spacing**: Matches your website's padding/margins

### Technical Features
- **Table-based Layout**: Maximum email client compatibility
- **Inline Styles**: No external CSS dependencies
- **Fallback Fonts**: Web-safe font stack
- **Image Placeholders**: Easy to replace with your content

## 🔧 Customization Tips

### Colors
- Change `background-color: #000000` for different themes
- Modify gradient colors in `.btn-primary` and `.gradient-text`
- Adjust opacity values for glassmorphism effects

### Typography
- Font sizes are responsive (desktop/mobile)
- Line heights optimized for readability
- Font weights match your design system

### Images
- Use high-quality images (72-96 DPI for email)
- Keep file sizes under 1MB total
- Test images in dark mode (black background)

### Buttons
- Primary button: High contrast (white on dark)
- Secondary button: Subtle glassmorphism effect
- Both buttons are fully clickable with proper href attributes

## 📊 Best Practices

1. **Subject Lines**: Keep under 50 characters
2. **Content Length**: 100-200 words for optimal engagement
3. **Images**: Always include alt text for accessibility
4. **Links**: Use descriptive anchor text
5. **Mobile Testing**: Preview on actual devices
6. **Spam Compliance**: Include unsubscribe link and physical address

## 🧪 Testing Checklist

- [ ] Preview in Gmail, Outlook, and mobile clients
- [ ] Test all links and buttons
- [ ] Check images load properly
- [ ] Verify responsive design on mobile
- [ ] Test dark mode compatibility
- [ ] Check for broken layouts in various clients

## 📁 File Location

The template is saved as: `email-template.html`

Simply copy the HTML content and paste it into your email marketing platform (Mailchimp, SendGrid, etc.) or email client.