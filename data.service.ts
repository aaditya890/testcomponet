import { Injectable } from '@angular/core';

export interface AboutService {
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  title: string;
  description: string;
  icon: string;
}

export interface LocationDetail {
  name: string;
  description: string;
}

export interface Review {
  name: string;
  rating: number;
  comment: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAboutServices(): AboutService[] {
    return [
      {
        title: "24×7 Available",
        description: "Round-the-clock premium service for all your travel needs.",
        icon: "🕐",
      },
      {
        title: "Instant Booking",
        description: "Book your premium ride instantly through multiple channels.",
        icon: "📱",
      },
      {
        title: "Punctual Service",
        description: "We maintain strict discipline for timely pickups and drops.",
        icon: "⏰",
      },
      {
        title: "Expert Drivers",
        description: "Professional drivers with extensive training and experience.",
        icon: "👨‍✈️",
      },
    ];
  }

  getDestinations(): Destination[] {
    return [
      {
        title: "Historical Landmarks",
        description: "Discover ancient temples and cultural heritage sites.",
        icon: "🏛️",
      },
      {
        title: "Nature Reserves",
        description: "Explore breathtaking landscapes and wildlife sanctuaries.",
        icon: "🌲",
      },
      {
        title: "Cultural Experiences",
        description: "Immerse in vibrant arts, crafts, and local traditions.",
        icon: "🎭",
      },
      {
        title: "Urban Attractions",
        description: "Visit modern cityscapes, markets, and entertainment hubs.",
        icon: "🏙️",
      },
    ];
  }

getLocationsList(): LocationDetail[] {
  return [
    { name: "Raipur", description: "Premium cab and taxi service in Raipur for airport transfers, city tours, and outstation travel." },
    { name: "Bhilai", description: "Reliable taxi and cab service in Bhilai for local rides, railway drops, and intercity connections." },
    { name: "Durg", description: "Affordable cab and taxi service in Durg with easy access to Raipur, Bhilai, and nearby towns." },
    { name: "Bilaspur", description: "Trusted taxi and cab service in Bilaspur for station transfers, city rides, and long trips." },
    { name: "Korba", description: "Safe cab and taxi service in Korba for business, leisure, and nearby tourist destinations." },
    { name: "Raigarh", description: "Comfortable taxi and cab service in Raigarh for local city travel and intercity journeys." },
    { name: "Jagdalpur", description: "Explore Bastar with our dependable taxi and cab service in Jagdalpur and nearby areas." },
    { name: "Ambikapur", description: "Efficient cab and taxi service in Ambikapur for business trips, leisure, and daily travel." },
    { name: "Rajnandgaon", description: "Affordable taxi and cab service in Rajnandgaon with quick access to Raipur and Durg." },
    { name: "Dhamtari", description: "Fast cab and taxi service in Dhamtari connecting you to Raipur, Balod, and nearby towns." },
    { name: "Balodabazar", description: "Local and outstation cab and taxi service in Balodabazar for all travel needs." },
    { name: "Kanker", description: "Safe taxi and cab service in Kanker for both short city rides and long-distance travel." },
    { name: "Kawardha", description: "Trusted cab and taxi service in Kawardha with routes to Raipur and tourist spots." },
    { name: "Bhatapara", description: "Reliable taxi and cab service in Bhatapara for city rides and outstation journeys." },
    { name: "Champa", description: "Affordable cab and taxi service in Champa for business, leisure, and quick travel." },
    { name: "Janjgir", description: "Book taxi and cab service in Janjgir for safe local and intercity transportation." },
    { name: "Dantewada", description: "Comfortable cab and taxi service in Dantewada for travel across Bastar and CG." },
    { name: "Balod", description: "Efficient taxi and cab service in Balod for local trips and connections to major cities." },
    { name: "Mungeli", description: "Affordable cab and taxi service in Mungeli for nearby towns and intercity rides." },
    { name: "Surajpur", description: "Safe taxi and cab service in Surajpur for city travel and long-distance routes." },
    { name: "Surguja", description: "Trusted cab and taxi service in Surguja for local journeys and tourist destinations." },
    { name: "Gaurela-Pendra-Marwahi", description: "Comfortable taxi and cab service in Gaurela-Pendra-Marwahi for all travel needs." },
    { name: "Pendra", description: "Affordable cab and taxi service in Pendra for local rides and intercity connections." },
    { name: "Manendragarh", description: "Reliable taxi and cab service in Manendragarh for local travel and long trips." },
    { name: "Saraipali", description: "Safe cab and taxi service in Saraipali for city commutes and outstation travel." },
    { name: "Mahasamund", description: "Trusted taxi and cab service in Mahasamund with routes to Raipur and nearby cities." },
    { name: "Bemetara", description: "Affordable cab and taxi service in Bemetara for local rides and intercity travel." },
    { name: "Narayanpur", description: "Comfortable taxi and cab service in Narayanpur for local and long-distance trips." }
  ];
}



  getReviews(): Review[] {
    return [
      {
        name: "Priya Sharma",
        rating: 5,
        comment: "KiteCab is my go-to for all travel in Chhattisgarh. Always on time, comfortable cars, and professional drivers. Highly recommend for Raipur taxi service!",
        location: "Raipur",
      },
      {
        name: "Amit Singh",
        rating: 5,
        comment: "Excellent outstation taxi service from Bilaspur. The driver was courteous and the journey was smooth. Best cab service in Bilaspur!",
        location: "Bilaspur",
      },
      {
        name: "Sneha Patel",
        rating: 4,
        comment: "Used KiteCab for an airport transfer in Durg. Very reliable and affordable. Will definitely use again for my next trip.",
        location: "Durg",
      },
      {
        name: "Rajesh Kumar",
        rating: 5,
        comment: "Fantastic experience with KiteCab's cab service in Chhattisgarh. They cover all major locations and their customer support is top-notch.",
        location: "Korba",
      },
      {
        name: "Deepa Verma",
        rating: 5,
        comment: "Needed a quick cab in Raipur, and KiteCab delivered! Fast, efficient, and very professional. Great service!",
        location: "Raipur",
      },
    ];
  }
}
