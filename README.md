# flyBitlux - Travel Agency Airline Booking System

## Project Overview

**flyBitlux** is a comprehensive travel agency airline booking system designed to streamline the process of searching, booking, and managing airline flights. This project provides a user-friendly platform for travelers to discover flight options, compare prices, and complete bookings with ease.

## Features

### Core Functionality
- **Flight Search**: Search for flights by departure/arrival cities, dates, and passenger count
- **Advanced Filtering**: Filter results by airline, price range, duration, stops, and departure time
- **Booking System**: Complete end-to-end booking process with seat selection and payment integration
- **User Accounts**: Create and manage user profiles, view booking history, and manage preferences
- **Itinerary Management**: Save, modify, and cancel bookings
- **Real-time Availability**: Live flight availability and pricing updates

### Additional Features
- **Multi-currency Support**: Display prices in multiple currencies
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Payment Gateway Integration**: Secure payment processing for flight bookings
- **Email Notifications**: Booking confirmations and flight status updates
- **Admin Dashboard**: Manage flights, airlines, pricing, and user data
- **Reporting Analytics**: Track bookings, revenue, and user behavior

## Technology Stack

### Frontend
- HTML5, CSS3, JavaScript
- React.js (or your chosen framework)
- State management solution
- Responsive UI framework

### Backend
- Node.js / Express.js (or your chosen backend technology)
- RESTful API architecture
- Authentication & Authorization

### Database
- MongoDB / PostgreSQL (or your chosen database)
- Data persistence and management

### Additional Tools & Services
- Payment Gateway Integration (Stripe, PayPal, etc.)
- Email Service (SendGrid, Nodemailer, etc.)
- Cloud Hosting & Deployment

## Project Structure

```
flyBitlux/
├── frontend/                  # Client-side application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
├── backend/                   # Server-side application
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── database/                  # Database scripts & schemas
├── docs/                      # Documentation
├── .gitignore
├── README.md
└── package.json
```

## Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm or yarn
- Database setup (MongoDB Atlas or PostgreSQL)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/littlebear4560-netizen/flyBitlux.git
   cd flyBitlux
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   - Create `.env` file in the backend directory
   - Add necessary configuration (database URL, API keys, etc.)

5. **Run the application**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm start

   # Terminal 2 - Frontend
   cd frontend
   npm start
   ```

The application will be available at `http://localhost:3000`

## Usage

### For Travelers
1. Visit the flyBitlux website
2. Enter your travel details (departure, destination, dates, passengers)
3. Review available flights and compare prices
4. Select your preferred flight and proceed to booking
5. Complete payment and receive confirmation

### For Administrators
1. Log in with admin credentials
2. Access the admin dashboard
3. Manage flights, airlines, pricing, and user data
4. View analytics and reports

## API Documentation

Detailed API documentation is available in the `/docs` directory. Key endpoints include:

- `GET /api/flights` - Search flights
- `POST /api/bookings` - Create a booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking
- `GET /api/users/:id` - Get user profile
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

## Database Schema

### Users
- User ID, Name, Email, Password, Phone, Address, Preferences

### Flights
- Flight ID, Airline, Departure, Arrival, Date, Time, Duration, Price, Seats Available

### Bookings
- Booking ID, User ID, Flight ID, Passengers, Seats, Total Price, Status, Created Date

### Airlines
- Airline ID, Name, Code, Logo, Contact Information

## Contributing

We welcome contributions to improve flyBitlux! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Testing

Run tests using:
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Deployment

### Development
```bash
npm run dev
```

### Production
```bash
npm run build
npm start
```

For detailed deployment instructions, refer to the `/docs/DEPLOYMENT.md` file.

## Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Change the port in .env or use:
PORT=3001 npm start
```

**Database connection error**
- Verify database credentials in `.env`
- Ensure database service is running
- Check network connectivity

**Payment gateway issues**
- Verify API keys are correct
- Check sandbox/production mode settings

## Support & Contact

For support, feature requests, or bug reports, please:
- Open an issue on GitHub
- Contact the development team at support@flybitleux.com
- Check the documentation in `/docs` directory

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Changelog

### Version 1.0.0 (Initial Release)
- Flight search and filtering
- Booking system
- User authentication
- Payment integration
- Admin dashboard

## Roadmap

- [ ] Mobile app (iOS/Android)
- [ ] Hotel booking integration
- [ ] Car rental service
- [ ] Travel insurance options
- [ ] Loyalty program
- [ ] AI-powered recommendations
- [ ] Multi-language support

## Team

Developed and maintained by the flyBitlux development team.

---

**Last Updated**: 2026-01-07

Thank you for using flyBitlux!
