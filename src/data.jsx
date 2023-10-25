const TravelData = [
  {
    key: 1,
    title: 'Grand Canyon',
    location: 'Arizona, USA',
    googleMapsUrl: 'https://maps.app.goo.gl/4NnsckWE5Bu2PgdB9',
    startDate: '15 Mar, 2022',
    endDate: '20 Mar, 2022',
    description:
      'The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States. It is a UNESCO World Heritage Site and one of the most breathtaking natural attractions in the world.',
    imageUrl:
      'https://images.unsplash.com/photo-1669937911016-6ad7483a2415?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 2,
    title: 'Machu Picchu',
    location: 'Cusco, Peru',
    googleMapsUrl: 'https://maps.app.goo.gl/7m53dyuSMCTPtKja9',
    startDate: '10 Jul, 2022',
    endDate: '18 Jul, 2022',
    description:
      'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. It is renowned for its dry-stone walls, ancient architecture, and panoramic views. A must-visit for history and nature enthusiasts.',
    imageUrl:
      'https://images.unsplash.com/photo-1587788156577-aa45c17638a1?auto=format&fit=crop&q=80&w=1467&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 3,
    title: 'Santorini',
    location: 'Greece',
    googleMapsUrl: 'https://maps.app.goo.gl/tguAp1Sa1M2iP6Rm9',
    startDate: '05 Sep, 2022',
    endDate: '12 Sep, 2022',
    description:
      'Santorini is an island in the Aegean Sea known for its stunning sunsets, white-washed buildings, and crystal-clear waters. Explore charming villages, beautiful beaches, and indulge in delicious Greek cuisine.',
    imageUrl:
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1676&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 4,
    title: 'Banff National Park',
    location: 'Alberta, Canada',
    googleMapsUrl: 'https://maps.app.goo.gl/6LsBefN9VzwSd1zG6',
    startDate: '25 Apr, 2022',
    endDate: '30 Apr, 2022',
    description:
      "Banff National Park is Canada's oldest national park and is located in the Rocky Mountains. It offers stunning mountain scenery, crystal-clear lakes, and abundant wildlife. Perfect for outdoor enthusiasts.",
    imageUrl:
      'https://images.unsplash.com/photo-1568259529275-28c401b8cea0?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 5,
    title: 'Great Barrier Reef',
    location: 'Queensland, Australia',
    googleMapsUrl: 'https://maps.app.goo.gl/a3Kez38V1F6qZHyZ9',
    startDate: '14 Aug, 2022',
    endDate: '20 Aug, 2022',
    description:
      "The Great Barrier Reef is the world's largest coral reef system, located off the coast of Queensland, Australia. It is a UNESCO World Heritage Site and a paradise for snorkeling and diving enthusiasts.",
    imageUrl:
      'https://images.unsplash.com/photo-1527079739242-736e10a5fbb8?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 6,
    title: 'Petra',
    location: "Ma'an Governorate, Jordan",
    googleMapsUrl: 'https://maps.app.goo.gl/V6VCJQGFyWyfFZcg6',
    startDate: '03 Nov, 2022',
    endDate: '10 Nov, 2022',
    description:
      "Petra is a famous archaeological site in Jordan's southwestern desert. It is renowned for its rock-cut architecture and water conduit system. Petra is also known as the 'Rose City' due to the color of the stone from which it is carved.",
    imageUrl:
      'https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 7,
    title: 'Bora Bora',
    location: 'French Polynesia',
    googleMapsUrl: 'https://maps.app.goo.gl/iW5i3iYodpNRymbcA',
    startDate: '22 Jun, 2022',
    endDate: '28 Jun, 2022',
    description:
      'Bora Bora is a small South Pacific island located in French Polynesia. It is surrounded by a turquoise lagoon and a barrier reef, creating a stunning natural scenery. Bora Bora is a popular destination for luxury resorts and water-based activities.',
    imageUrl:
      'https://images.unsplash.com/photo-1676405328043-85738f8473ba?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 8,
    title: 'Marrakech',
    location: 'Morocco',
    googleMapsUrl: 'https://maps.app.goo.gl/eLhswMABpPiKP7KAA',
    startDate: '17 Sep, 2022',
    endDate: '25 Sep, 2022',
    description:
      'Marrakech is a major city in Morocco known for its vibrant markets, stunning palaces, and gardens. The city offers a rich cultural experience with its historical sites, traditional cuisine, and lively atmosphere.',
    imageUrl:
      'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&q=80&w=1524&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 9,
    title: 'Easter Island',
    location: 'Chile',
    googleMapsUrl: 'https://maps.app.goo.gl/dqjgkGxWwADFQYNb8',
    startDate: '08 Dec, 2022',
    endDate: '15 Dec, 2022',
    description:
      'Easter Island, also known as Rapa Nui, is a remote island in the Pacific Ocean. It is famous for its monumental statues called Moai, created by the early Rapa Nui people. The island offers a unique blend of archaeology, history, and natural beauty.',
    imageUrl:
      'https://images.unsplash.com/photo-1600754047212-0cf91397fbc6?auto=format&fit=crop&q=80&w=1548&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default TravelData;
