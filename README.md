# Traffic Prediction App

This project is a web application built using the **Next.js** framework that integrates with the **Google Maps API** to provide traffic predictions. The application takes in origin, destination, waypoints, departure time, and mode of transport to calculate the best route and estimated time based on real-time traffic data.

## Features

- **Route Prediction**: Get predicted traffic conditions and estimated travel time based on real-time data from Google Maps.
- **Integration with Google Maps API**: Utilizes Google Maps Distance Matrix API to calculate distance and duration between multiple locations.
- **Supports Multiple Transport Modes**: Users can choose from different transport modes including driving, walking, bicycling, and transit.
- **Real-time Traffic Data**: Provides updated predictions based on traffic conditions and departure time.

## Technologies Used

- **Next.js**: A React-based framework for building the frontend and API routes.
- **Google Maps API**: To fetch traffic data, including route information, distance, and duration.
- **TypeScript**: For type safety and better development experience.
- **Axios**: For making HTTP requests to external APIs.
- **Prisma**: For database integration and management (optional based on use).
- **Docker**: For containerized development and deployment.