<div align="center">

<div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%), 
             radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 80% 20%, rgba(255, 193, 7, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 40% 40%, rgba(220, 53, 69, 0.05) 0%, transparent 50%);
             background-size: 100% 100%, 200px 200px, 150px 150px, 300px 300px;
             padding: 30px; border-radius: 4px; margin: 20px 0; 
             box-shadow: 0 8px 32px rgba(0,0,0,0.1); width: 100%; max-width: 100%;
             position: relative; overflow: hidden;">
  <div style="position: absolute; top: 10%; left: 10%; width: 40px; height: 40px; 
              border: 2px solid rgba(108, 117, 125, 0.1); border-radius: 50%; 
              transform: rotate(45deg);"></div>
  <div style="position: absolute; top: 20%; right: 15%; width: 60px; height: 60px; 
              border: 2px solid rgba(40, 167, 69, 0.1); border-radius: 10px; 
              transform: rotate(30deg);"></div>
  <div style="position: absolute; bottom: 15%; left: 15%; width: 50px; height: 50px; 
              border: 2px solid rgba(255, 193, 7, 0.1); 
              clip-path: polygon(50% 0%, 0% 100%, 100% 100%);"></div>
  <div style="position: absolute; bottom: 20%; right: 20%; width: 35px; height: 35px; 
              background: rgba(220, 53, 69, 0.05); border-radius: 50%;"></div>
  <img src="assets/logo_transparent.png" alt="Gmail Filters Collection Logo" width="200" style="position: relative; z-index: 10;" />
</div>


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Gmail](https://img.shields.io/badge/Gmail-Compatible-red.svg)](https://gmail.com)
[![XML Version](https://img.shields.io/badge/XML-1.0-blue.svg)]()
[![Maintenance](https://img.shields.io/badge/Maintained-Yes-brightgreen.svg)]()
[![Ready to Use](https://img.shields.io/badge/Status-Ready%20to%20Use-brightgreen.svg)]()
[![4 Packages](https://img.shields.io/badge/Packages-4-blue.svg)]()
[![Easy Setup](https://img.shields.io/badge/Setup-Easy-green.svg)]()

**Ready-to-use Gmail filter packages that automatically organize your inbox**

*Choose the package that fits your needs and get organized in minutes*

</div>

## Repository Structure

```
gmail-filters-collection/
├── README.md                    
└── filters/
    ├── basic-user/
    │   ├── basic_user_filters.xml
    │   └── README.md
    ├── business-professional/
    │   ├── business_professional_filters.xml
    │   └── README.md
    ├── student/
    │   ├── student_filters.xml
    │   └── README.md
    └── youtuber-developer/
        ├── youtuber_developer_filters.xml
        └── README.md
```

## ✨ What You Get

| Feature | Benefit |
|---------|---------|
| 🤖 **Automatic email sorting** | No more manual organization |
| ⭐ **Important emails marked** | Never miss what matters |
| 🛡️ **Spam protection** | Financial emails stay safe |
| 🧹 **Clean inbox** | Less clutter, more focus |
| 📱 **Works everywhere** | Phone and computer ready |

## 📦 Available Packages

<table>
<tr>
<td width="50%">

### [👤 Basic User](filters/basic-user/)
**Perfect for:** Regular email users

**What it organizes:**
- 📱 Social media notifications
- 🛒 Online shopping orders  
- 📺 Streaming subscriptions
- ✈️ Travel bookings
- 💰 Money-related emails

</td>
<td width="50%">

### [💼 Business Professional](filters/business-professional/)
**Perfect for:** Business owners, employees, freelancers

**What it organizes:**
- 👥 Client emails (marked as important)
- 📅 Meeting invitations
- 💰 Money and invoices
- 📊 Project updates
- ⚖️ Legal documents

</td>
</tr>
<tr>
<td width="50%">

### [🎓 Student](filters/student/)
**Perfect for:** College and university students

**What it organizes:**
- 🏫 School emails (.edu addresses)
- 📚 Class assignments and grades
- 💰 Financial aid information
- 💼 Job applications
- 🎉 Campus activities

</td>
<td width="50%">

### [💻 YouTuber & Developer](filters/youtuber-developer/)
**Perfect for:** Content creators and programmers

**What it organizes:**
- 📺 YouTube notifications
- 💻 GitHub and coding platforms
- 🎨 Creative tools (Figma, Adobe)
- 🤝 Business partnerships
- 📰 Tech newsletters

</td>
</tr>
</table>

## 🚀 How to Install

> **Quick Setup - Takes just 2 minutes!**

1. **📋 Pick your package** from the list above
2. **📁 Go to that folder** and download the XML file  
3. **⚙️ Open Gmail** → Settings → "Filters and Blocked Addresses"
4. **📤 Click "Import filters"** → Choose your downloaded file
5. **✅ Review and create** → Done!

## 🎯 Why Use These Filters?

| 💪 **Benefit** | 📈 **Result** |
|----------------|---------------|
| ⏰ **Save time** | No more manual email sorting |
| 📂 **Stay organized** | Everything has its place |
| 🔔 **Never miss important emails** | Auto-marked for priority |
| 😌 **Less stress** | Clean, organized inbox |
| ⚡ **Easy setup** | Ready in just a few minutes |

## 📋 Need Help?
- Read the README in each package folder for detailed setup instructions
- Open an issue if something doesn't work as expected

## Can I Customize?

Yes! These filters are starting points. You can:
- Add more email addresses or keywords
- Change label names
- Combine filters from different packages
- Turn off rules you don't need

### Adding Your Own Filter

Want to add a new service or category? Here's the template:

```xml
<!-- YOUR SERVICE: Detailed description of what this filter captures -->
<entry>
  <category term='filter'/>
  <title>Your Service Name</title>
  <updated>2025-09-07T00:00:00Z</updated>
  <content/>
  <apps:property name='from' value='example.com OR service.com'/>
  <apps:property name='hasTheWord' value='subject:(keyword1 OR keyword2 OR "exact phrase")'/>
  <apps:property name='label' value='YourCategory/YourService'/>
  <apps:property name='shouldNeverSpam' value='true'/>
</entry>
```

### Example: Adding Discord

```xml
<!-- SOCIAL: Discord server and messaging notifications -->
<entry>
  <category term='filter'/>
  <title>Social - Discord</title>
  <updated>2025-09-07T00:00:00Z</updated>
  <content/>
  <apps:property name='from' value='discord.com OR discordapp.com'/>
  <apps:property name='hasTheWord' value='subject:(server OR guild OR message OR mention)'/>
  <apps:property name='label' value='Social/Discord'/>
  <apps:property name='shouldArchive' value='true'/>
</entry>
```

### Common Properties

- `from` - Filter by sender email domain
- `hasTheWord` - Filter by subject line keywords
- `label` - Where to organize the email
- `shouldAlwaysMarkImportant` - Mark as important
- `shouldStar` - Add star to email
- `shouldArchive` - Skip inbox, go straight to label
- `shouldNeverSpam` - Never mark as spam

## License

Free to use and modify. See [LICENSE](LICENSE) for details.


**⭐ Star this repo if it helped organize your Gmail!**
