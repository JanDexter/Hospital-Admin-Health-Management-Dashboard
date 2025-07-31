# Immunization Management System

A modern, responsive immunization management system built with React, TypeScript, and Tailwind CSS. Designed for healthcare administrators and parents to manage and track vaccination records.

## Features

### Admin Portal
- 📊 **Interactive Dashboard**: Real-time immunization metrics and analytics
- � **Vaccine Management**: Track vaccine inventory and distribution
- 👥 **Patient Management**: Manage immunization records for all patients
- 📅 **Vaccination Scheduling**: Schedule and track vaccination appointments
- 🏥 **Clinic Management**: Monitor vaccination sites and capacity
- 👨‍⚕️ **Staff Management**: Manage healthcare staff and vaccination teams
- 📁 **Medical Records**: Access and manage immunization records
- 📈 **Analytics**: Comprehensive vaccination coverage reporting
- 🔔 **Alerts & Notifications**: Vaccine reminders and alerts

### Parent Portal
- � **Child Profiles**: View all registered children's immunization records
- 📅 **Vaccination Schedule**: Track upcoming and completed vaccinations
- 📋 **Immunization History**: Complete vaccination history with dates and providers
- 🔔 **Reminders**: Automated reminders for upcoming vaccinations
- 📄 **Certificates**: Download vaccination certificates and records
- 📱 **Mobile Friendly**: Access records on any device

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Charts**: Recharts
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Immunization-Management-System.git
   cd Immunization-Management-System
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Manual Deployment

To deploy manually to GitHub Pages:

```bash
npm run build
npm run deploy
```

## Project Structure

```
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── admin/           # Admin portal components
│   ├── parent/          # Parent portal components
│   ├── DashboardHeader.tsx
│   ├── DashboardSidebar.tsx
│   ├── DashboardMetrics.tsx
│   ├── DashboardCharts.tsx
│   └── RecentActivities.tsx
├── src/                 # Source files
├── styles/              # CSS files
├── .github/workflows/   # GitHub Actions
└── dist/                # Built files (generated)
```

## Features Overview

### Admin Dashboard Metrics
- Total Patients: 1,247 (immunized individuals)
- Today's Vaccinations: 89
- Vaccine Inventory: 1,245 doses
- Active Alerts: 3 (low stock warnings)

### Parent Portal Features
- View child immunization records
- Track vaccination schedules
- Receive reminders for upcoming vaccines
- Download vaccination certificates
- View clinic information and schedules

### Charts & Analytics
- Vaccination coverage by age group
- Vaccine distribution by type
- Monthly vaccination trends
- Coverage rates by geographic area

### Recent Activities
- Real-time vaccination records
- New patient registrations
- Vaccine inventory updates
- System alerts and reminders

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide](https://lucide.dev/) for the icons
- [Recharts](https://recharts.org/) for the charting library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
