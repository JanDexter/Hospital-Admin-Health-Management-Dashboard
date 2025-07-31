# Hospital Admin Health Management Dashboard

A modern, responsive healthcare administration dashboard built with React, TypeScript, and Tailwind CSS.

## Features

- 📊 **Interactive Dashboard**: Real-time metrics and analytics
- 👥 **Patient Management**: Track patient information and statistics
- 📅 **Appointment Scheduling**: Manage appointments and schedules
- 🏥 **Bed Management**: Monitor bed availability and occupancy
- 👨‍⚕️ **Staff Management**: Manage healthcare staff and departments
- 📁 **Medical Records**: Access and manage patient records
- 📈 **Analytics**: Comprehensive reporting and analytics
- 🔔 **Alerts & Notifications**: Real-time alerts and notifications

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
   git clone https://github.com/yourusername/Hospital-Admin-Health-Management-Dashboard.git
   cd Hospital-Admin-Health-Management-Dashboard
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

### Dashboard Metrics
- Total Patients: 1,247
- Today's Appointments: 89
- Available Beds: 23/156
- Active Alerts: 3

### Charts & Analytics
- Patient admission trends
- Department-wise patient distribution
- Monthly revenue tracking
- Bed occupancy rates

### Recent Activities
- Real-time activity feed
- Patient admissions and discharges
- Staff assignments
- System alerts

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
