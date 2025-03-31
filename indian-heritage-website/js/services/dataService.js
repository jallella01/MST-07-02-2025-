/**
 * Data Service
 * Provides data for all sections of the Indian Heritage website
 */
app.service('dataService', ['$http', '$q', function($http, $q) {
    
    // In a production environment, this would fetch data from APIs
    // For this demo, we'll use static data
    
    // Current search query
    let searchQuery = '';
    
    // Set search query
    this.setSearchQuery = function(query) {
        searchQuery = query;
    };
    
    // Get search query
    this.getSearchQuery = function() {
        return searchQuery;
    };
    
    // Get featured traditions for the home page
    this.getFeaturedTraditions = function() {
        const deferred = $q.defer();
        
        // Simulate API call with timeout
        setTimeout(function() {
            deferred.resolve([
                {
                    id: 1,
                    title: 'Bharatanatyam',
                    category: 'dance',
                    region: 'south',
                    image: 'https://source.unsplash.com/600x400/?bharatanatyam,dance',
                    description: 'One of India\'s oldest classical dance forms originating from Tamil Nadu, Bharatanatyam is known for its grace, purity, tenderness, and sculpturesque poses.',
                    location: 'Tamil Nadu, South India'
                },
                {
                    id: 2,
                    title: 'Madhubani Art',
                    category: 'art',
                    region: 'east',
                    image: 'https://source.unsplash.com/600x400/?madhubani,art',
                    description: 'This ancient art form from the Mithila region of Bihar uses geometric patterns to create colorful compositions depicting nature and Hindu religious motifs.',
                    location: 'Bihar, East India'
                },
                {
                    id: 3,
                    title: 'Phulkari Embroidery',
                    category: 'textiles',
                    region: 'north',
                    image: 'https://source.unsplash.com/600x400/?embroidery,textile',
                    description: 'A traditional embroidery technique from Punjab, Phulkari translates to "flower work" and features vibrant thread work that creates intricate patterns on shawls and other garments.',
                    location: 'Punjab, North India'
                }
            ]);
        }, 300);
        
        return deferred.promise;
    };
    
    // Get upcoming events for the home page
    this.getUpcomingEvents = function() {
        const deferred = $q.defer();
        
        // Simulate API call with timeout
        setTimeout(function() {
            deferred.resolve([
                {
                    id: 1,
                    title: 'Diwali - Festival of Lights',
                    category: 'festivals',
                    date: '2023-11-12',
                    image: 'https://source.unsplash.com/600x400/?diwali,festival',
                    description: 'Diwali, the festival of lights, is one of India\'s most important celebrations, symbolizing the victory of light over darkness and good over evil.',
                    location: 'All across India'
                },
                {
                    id: 2,
                    title: 'Khajuraho Dance Festival',
                    category: 'dance',
                    date: '2024-02-20',
                    image: 'https://source.unsplash.com/600x400/?dance,festival',
                    description: 'An annual week-long festival of classical dances set against the spectacular backdrop of the illuminated Khajuraho temples.',
                    location: 'Khajuraho, Madhya Pradesh'
                },
                {
                    id: 3,
                    title: 'International Yoga Day Celebration',
                    category: 'workshops',
                    date: '2023-06-21',
                    image: 'https://source.unsplash.com/600x400/?yoga,india',
                    description: 'A celebration of yoga, India\'s ancient physical, mental and spiritual practice that has spread across the globe.',
                    location: 'New Delhi and across India'
                }
            ]);
        }, 300);
        
        return deferred.promise;
    };
    
    // Get all gallery items
    this.getGalleryItems = function() {
        const deferred = $q.defer();
        
        // Simulate API call with timeout
        setTimeout(function() {
            deferred.resolve([
                {
                    id: 1,
                    title: 'Taj Mahal',
                    category: 'architecture',
                    image: 'https://source.unsplash.com/600x400/?taj,mahal',
                    description: 'A UNESCO World Heritage site and one of the most recognizable structures in the world, the Taj Mahal was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.',
                    location: 'Agra, Uttar Pradesh'
                },
                {
                    id: 2,
                    title: 'Kathakali Performer',
                    category: 'dance',
                    image: 'https://source.unsplash.com/600x400/?kathakali',
                    description: 'Kathakali is a major form of classical Indian dance. It is a "story play" genre of art, but one distinguished by the elaborately colorful make-up, costumes and face masks that the traditionally male actor-dancers wear.',
                    location: 'Kerala, South India'
                },
                {
                    id: 3,
                    title: 'Rajasthani Turban',
                    category: 'textiles',
                    image: 'https://source.unsplash.com/600x400/?turban,rajasthan',
                    description: 'The traditional turbans of Rajasthan, known as "pagri" or "safa", vary in style, color and size, and indicate the caste, region and social status of the wearer.',
                    location: 'Rajasthan, North India'
                },
                {
                    id: 4,
                    title: 'Holi Celebration',
                    category: 'festivals',
                    image: 'https://source.unsplash.com/600x400/?holi,festival',
                    description: 'Holi, the festival of colors, celebrates the arrival of spring and the victory of good over evil. People throw colored powders and water at each other in joyful celebration.',
                    location: 'Mathura and Vrindavan, Uttar Pradesh'
                },
                {
                    id: 5,
                    title: 'Mehndi Art',
                    category: 'art',
                    image: 'https://source.unsplash.com/600x400/?mehndi,henna',
                    description: 'Mehndi is a form of body art originating from ancient India, in which decorative designs are created on a person\'s body using a paste created from the powdered dry leaves of the henna plant.',
                    location: 'All across India'
                },
                {
                    id: 6,
                    title: 'Indian Spices',
                    category: 'cuisine',
                    image: 'https://source.unsplash.com/600x400/?spices,indian',
                    description: 'Indian cuisine is characterized by its sophisticated use of spices, herbs, and the mixing of multiple flavors. Each spice has a unique taste and medicinal property.',
                    location: 'All across India'
                },
                {
                    id: 7,
                    title: 'Classical Odissi Dance',
                    category: 'dance',
                    image: 'https://source.unsplash.com/600x400/?odissi,dance',
                    description: 'Odissi is one of the oldest surviving dance forms of India, with archaeological evidence of its existence dating back to the 2nd century BCE.',
                    location: 'Odisha, East India'
                },
                {
                    id: 8,
                    title: 'Golden Temple',
                    category: 'architecture',
                    image: 'https://source.unsplash.com/600x400/?golden,temple',
                    description: 'The Harmandir Sahib, also known as the Golden Temple, is the holiest gurdwara and the most important pilgrimage site of Sikhism.',
                    location: 'Amritsar, Punjab'
                },
                {
                    id: 9,
                    title: 'Bandhani Textile',
                    category: 'textiles',
                    image: 'https://source.unsplash.com/600x400/?bandhani,textile',
                    description: 'Bandhani is a type of tie-dye textile decorated by plucking the cloth with the fingernails into many tiny bindings that form a figurative design.',
                    location: 'Gujarat and Rajasthan'
                },
                {
                    id: 10,
                    title: 'Thali Meal',
                    category: 'cuisine',
                    image: 'https://source.unsplash.com/600x400/?thali,indian',
                    description: 'A traditional Indian thali consists of a selection of various dishes served on a platter. It varies from region to region and is usually served in small bowls called katori arranged on a tray.',
                    location: 'All across India'
                },
                {
                    id: 11,
                    title: 'Pichvai Painting',
                    category: 'art',
                    image: 'https://source.unsplash.com/600x400/?painting,traditional',
                    description: 'Pichvai paintings are intricate traditional artworks created on fabric that depict scenes from Lord Krishna\'s life. They originated in the temple town of Nathdwara in Rajasthan.',
                    location: 'Rajasthan, North India'
                },
                {
                    id: 12,
                    title: 'Durga Puja Festival',
                    category: 'festivals',
                    image: 'https://source.unsplash.com/600x400/?durga,puja',
                    description: 'Durga Puja is an annual Hindu festival that celebrates the goddess Durga. It marks the victory of Goddess Durga over the demon king Mahishasura.',
                    location: 'West Bengal, East India'
                }
            ]);
        }, 300);
        
        return deferred.promise;
    };
    
    // Get all states data for the interactive map
    this.getStatesData = function() {
        const deferred = $q.defer();
        
        // Simulate API call with timeout
        setTimeout(function() {
            deferred.resolve([
                {
                    id: 'andhra-pradesh',
                    name: 'Andhra Pradesh',
                    region: 'south',
                    culturalHighlights: [
                        'Kuchipudi Dance Form',
                        'Kalamkari Art',
                        'Tirupati Balaji Temple',
                        'Pochampalli Sarees'
                    ],
                    description: 'Andhra Pradesh has a rich cultural heritage with roots dating back to ancient times. The state is known for its distinctive art forms, classical dance, literature, and cuisine.'
                },
                {
                    id: 'arunachal-pradesh',
                    name: 'Arunachal Pradesh',
                    region: 'northeast',
                    culturalHighlights: [
                        'Tawang Monastery',
                        'Mopin Festival',
                        'Tribal Weaving Traditions',
                        'Bamboo Craft'
                    ],
                    description: 'Home to 26 major tribes and over 100 sub-tribes, Arunachal Pradesh showcases rich tribal heritage with distinct languages, festivals, and traditions reflecting deep connections to nature.'
                },
                {
                    id: 'assam',
                    name: 'Assam',
                    region: 'northeast',
                    culturalHighlights: [
                        'Bihu Festival',
                        'Sattriya Dance',
                        'Assam Silk (Muga, Pat, Eri)',
                        'Majuli River Island Cultural Heritage'
                    ],
                    description: 'Assam\'s culture represents a fusion of Indo-Burmese, Mongolian and Tai cultural influences. The state is known for its rich silk traditions, Bihu dance, and vibrant festivals.'
                },
                {
                    id: 'bihar',
                    name: 'Bihar',
                    region: 'east',
                    culturalHighlights: [
                        'Madhubani Painting',
                        'Chhath Puja',
                        'Buddhist Heritage Sites',
                        'Sujini Embroidery'
                    ],
                    description: 'Bihar has been a major center of religion, art, and education since ancient times. It was the birthplace of Buddhism and Jainism and home to ancient universities like Nalanda and Vikramshila.'
                },
                {
                    id: 'chhattisgarh',
                    name: 'Chhattisgarh',
                    region: 'central',
                    culturalHighlights: [
                        'Bastar Tribal Art',
                        'Panthi Dance',
                        'Madai Festival',
                        'Bell Metal Craft'
                    ],
                    description: 'Chhattisgarh has a significant tribal population with unique cultural traditions. The state is known for its rich folk traditions, tribal dances, and distinctive art forms.'
                },
                {
                    id: 'goa',
                    name: 'Goa',
                    region: 'west',
                    culturalHighlights: [
                        'Portuguese Colonial Architecture',
                        'Carnival Festival',
                        'Goan Cuisine',
                        'Kunbi Saree Weaving'
                    ],
                    description: 'Goa\'s culture is a unique blend of Indian and Portuguese influences, reflected in its architecture, cuisine, music, and festivals. The state has a rich maritime history and distinct cultural identity.'
                },
                {
                    id: 'gujarat',
                    name: 'Gujarat',
                    region: 'west',
                    culturalHighlights: [
                        'Garba and Dandiya Raas Dance',
                        'Patola Sarees',
                        'Rann Utsav',
                        'Gujarati Thali'
                    ],
                    description: 'Gujarat has a vibrant cultural heritage with distinctive art forms, cuisine, and traditions. The state is known for its textiles, embroidery styles like Kutch work, and dynamic folk dances.'
                },
                {
                    id: 'haryana',
                    name: 'Haryana',
                    region: 'north',
                    culturalHighlights: [
                        'Phulkari Embroidery',
                        'Jhumar Dance',
                        'Ghoomar Dance',
                        'Teej Festival'
                    ],
                    description: 'Haryana\'s folk culture reflects its agricultural history and traditions. The state is known for its folk songs, dances, and traditional attire that showcase rural lifestyle and values.'
                },
                {
                    id: 'himachal-pradesh',
                    name: 'Himachal Pradesh',
                    region: 'north',
                    culturalHighlights: [
                        'Kullu Dussehra',
                        'Kinnauri Shawls',
                        'Chamba Rumal',
                        'Nati Folk Dance'
                    ],
                    description: 'Himachal Pradesh\'s culture is heavily influenced by its mountainous geography. Each valley has developed its distinct cultural identity with unique traditions, festivals, and art forms.'
                },
                {
                    id: 'jharkhand',
                    name: 'Jharkhand',
                    region: 'east',
                    culturalHighlights: [
                        'Sohrai Painting',
                        'Jadopatia Art',
                        'Sarhul Festival',
                        'Tussar Silk Weaving'
                    ],
                    description: 'Jharkhand has a significant tribal population with distinct cultural practices. Traditional music using instruments like mandar, nagara, and dhol is central to tribal cultural expression.'
                },
                {
                    id: 'karnataka',
                    name: 'Karnataka',
                    region: 'south',
                    culturalHighlights: [
                        'Yakshagana Performance Art',
                        'Mysore Painting',
                        'Hampi Heritage Site',
                        'Carnatic Music'
                    ],
                    description: 'Karnataka has contributed significantly to both classical and folk traditions in India. The state is home to various dance forms, architectural marvels, and a rich literary tradition.'
                },
                {
                    id: 'kerala',
                    name: 'Kerala',
                    region: 'south',
                    culturalHighlights: [
                        'Kathakali Dance Drama',
                        'Mohiniyattam Dance',
                        'Theyyam Ritual Art',
                        'Kerala Mural Paintings'
                    ],
                    description: 'Kerala has a distinctive cultural identity influenced by its geography and history. The state is known for its classical art forms, ayurvedic traditions, and distinctive architecture.'
                },
                {
                    id: 'madhya-pradesh',
                    name: 'Madhya Pradesh',
                    region: 'central',
                    culturalHighlights: [
                        'Khajuraho Temples',
                        'Gond Tribal Art',
                        'Malwa Paintings',
                        'Maach Folk Theater'
                    ],
                    description: 'Known as the "Heart of India," Madhya Pradesh has diverse cultural traditions. The state is home to significant architectural wonders, tribal art forms, and folk traditions.'
                },
                {
                    id: 'maharashtra',
                    name: 'Maharashtra',
                    region: 'west',
                    culturalHighlights: [
                        'Lavani Folk Dance',
                        'Warli Tribal Art',
                        'Ganesh Chaturthi Festival',
                        'Paithani Sarees'
                    ],
                    description: 'Maharashtra has a rich cultural heritage that combines ancient traditions with cosmopolitan influences. The state has a vibrant theater tradition, folk arts, and distinctive culinary traditions.'
                },
                {
                    id: 'manipur',
                    name: 'Manipur',
                    region: 'northeast',
                    culturalHighlights: [
                        'Manipuri Classical Dance',
                        'Lai Haraoba Festival',
                        'Pena Music',
                        'Moirang Kangleirol Folk Art'
                    ],
                    description: 'Manipur has a unique cultural identity with indigenous traditions as well as influences from Southeast Asia. The state is famous for its classical Manipuri dance tradition and martial arts like Thang-Ta.'
                },
                {
                    id: 'meghalaya',
                    name: 'Meghalaya',
                    region: 'northeast',
                    culturalHighlights: [
                        'Khasi and Garo Folk Music',
                        'Nongkrem Dance Festival',
                        'Living Root Bridges',
                        'Bamboo Craft'
                    ],
                    description: 'Meghalaya\'s culture is shaped by its three major tribes - Khasi, Garo, and Jaintia. Each tribe has unique traditions, crafts, and festivals that celebrate their deep connection with nature.'
                },
                {
                    id: 'mizoram',
                    name: 'Mizoram',
                    region: 'northeast',
                    culturalHighlights: [
                        'Cheraw Bamboo Dance',
                        'Chapchar Kut Festival',
                        'Mizo Folk Songs',
                        'Traditional Handloom'
                    ],
                    description: 'Mizoram has a vibrant cultural identity rooted in its Mizo tribal heritage. Music plays a central role in Mizo culture, with community singing being an important social activity.'
                },
                {
                    id: 'nagaland',
                    name: 'Nagaland',
                    region: 'northeast',
                    culturalHighlights: [
                        'Hornbill Festival',
                        'Naga Tribal Textiles',
                        'War Dance',
                        'Wood Carving'
                    ],
                    description: 'Nagaland is home to 16 major tribes, each with distinct traditions and customs. The state\'s cultural practices are closely tied to tribal identity, with vibrant festivals and distinctive art forms.'
                },
                {
                    id: 'odisha',
                    name: 'Odisha',
                    region: 'east',
                    culturalHighlights: [
                        'Odissi Classical Dance',
                        'Konark Sun Temple',
                        'Pattachitra Painting',
                        'Rath Yatra Festival'
                    ],
                    description: 'Odisha has a rich cultural heritage dating back to ancient times. The state is known for its classical dance form Odissi, intricate temple architecture, and traditional painting styles.'
                },
                {
                    id: 'punjab',
                    name: 'Punjab',
                    region: 'north',
                    culturalHighlights: [
                        'Bhangra Folk Dance',
                        'Giddha Folk Dance',
                        'Phulkari Embroidery',
                        'Punjabi Folk Music'
                    ],
                    description: 'Punjab\'s vibrant culture is characterized by its energetic music and dance forms, distinctive cuisine, and colorful festivals. The state has a rich tradition of folklore and oral storytelling.'
                },
                {
                    id: 'rajasthan',
                    name: 'Rajasthan',
                    region: 'north',
                    culturalHighlights: [
                        'Ghoomar Folk Dance',
                        'Miniature Paintings',
                        'Pushkar Fair',
                        'Blue Pottery of Jaipur'
                    ],
                    description: 'Rajasthan has a rich cultural heritage reflecting its royal history. The state is known for its colorful festivals, distinctive architecture, vibrant textiles, and folk music traditions.'
                },
                {
                    id: 'sikkim',
                    name: 'Sikkim',
                    region: 'northeast',
                    culturalHighlights: [
                        'Buddhist Monasteries',
                        'Chaam Mask Dance',
                        'Lepcha Craft',
                        'Losoong Festival'
                    ],
                    description: 'Sikkim\'s culture reflects influences from Buddhism and its indigenous tribal traditions. The state has a unique cultural identity shaped by its Himalayan geography and diverse ethnic communities.'
                },
                {
                    id: 'tamil-nadu',
                    name: 'Tamil Nadu',
                    region: 'south',
                    culturalHighlights: [
                        'Bharatanatyam Classical Dance',
                        'Dravidian Temple Architecture',
                        'Kanchipuram Silk Sarees',
                        'Pongal Harvest Festival'
                    ],
                    description: 'Tamil Nadu has one of the oldest continuous cultural histories in India. The state is known for its classical music and dance traditions, distinctive temple architecture, and ancient literature.'
                },
                {
                    id: 'telangana',
                    name: 'Telangana',
                    region: 'south',
                    culturalHighlights: [
                        'Bathukamma Festival',
                        'Perini Shivatandavam Dance',
                        'Cheriyal Scroll Painting',
                        'Golconda and Kakatiya Art'
                    ],
                    description: 'Telangana has a cultural identity shaped by its historical kingdoms and diverse influences. The state celebrates unique festivals and has distinctive art forms and architectural traditions.'
                },
                {
                    id: 'tripura',
                    name: 'Tripura',
                    region: 'northeast',
                    culturalHighlights: [
                        'Garia Dance',
                        'Reangs\' Hojagiri Dance',
                        'Bamboo and Cane Craft',
                        'Tripuri Traditional Risa Garments'
                    ],
                    description: 'Tripura\'s culture is a blend of indigenous tribal traditions and Bengali influences. The state has numerous tribal communities, each with their own linguistic and cultural traditions.'
                },
                {
                    id: 'uttarakhand',
                    name: 'Uttarakhand',
                    region: 'north',
                    culturalHighlights: [
                        'Kumaoni and Garhwali Folk Songs',
                        'Aipan Art',
                        'Choliya Dance',
                        'Nanda Devi Raj Jat Festival'
                    ],
                    description: 'Uttarakhand\'s cultural identity is closely tied to its Himalayan geography. The state has rich folk traditions, with distinctive music, dance forms, and festivals that celebrate mountain life.'
                },
                {
                    id: 'uttar-pradesh',
                    name: 'Uttar Pradesh',
                    region: 'north',
                    culturalHighlights: [
                        'Kathak Classical Dance',
                        'Taj Mahal',
                        'Banaras Gharana Music',
                        'Chikankari Embroidery'
                    ],
                    description: 'Uttar Pradesh has been at the center of Indian cultural and religious traditions for centuries. The state has a rich heritage of classical music, dance, craft traditions, and architectural marvels.'
                },
                {
                    id: 'west-bengal',
                    name: 'West Bengal',
                    region: 'east',
                    culturalHighlights: [
                        'Durga Puja Festival',
                        'Rabindra Sangeet Music',
                        'Kantha Embroidery',
                        'Chhau Mask Dance'
                    ],
                    description: 'West Bengal has a rich intellectual and artistic heritage. The state is known for its literary traditions, distinctive music, varied folk art forms, and elaborate festival celebrations.'
                }
            ]);
        }, 300);
        
        return deferred.promise;
    };
    
    // Get all events data
    this.getEvents = function() {
        const deferred = $q.defer();
        
        // Simulate API call with timeout
        setTimeout(function() {
            deferred.resolve([
                {
                    id: 1,
                    title: 'Diwali - Festival of Lights',
                    category: 'festivals',
                    date: '2023-11-12',
                    image: 'https://source.unsplash.com/600x400/?diwali,festival',
                    description: 'Diwali, the festival of lights, is one of India\'s most important celebrations, symbolizing the victory of light over darkness and good over evil. The festival involves lighting oil lamps and candles, sharing sweets, and setting off fireworks.',
                    location: 'All across India',
                    link: '#/festivals/diwali'
                },
                {
                    id: 2,
                    title: 'Holi - Festival of Colors',
                    category: 'festivals',
                    date: '2024-03-25',
                    image: 'https://source.unsplash.com/600x400/?holi,colors',
                    description: 'Holi celebrates the arrival of spring and the end of winter. It\'s known for its vibrant colors, where people throw colored powders and water at each other, dance to music, and share festive foods.',
                    location: 'All across India (especially Mathura and Vrindavan)',
                    link: '#/festivals/holi'
                },
                {
                    id: 3,
                    title: 'Khajuraho Dance Festival',
                    category: 'dance',
                    date: '2024-02-20',
                    image: 'https://source.unsplash.com/600x400/?dance,festival',
                    description: 'An annual week-long festival of classical dances set against the spectacular backdrop of the illuminated Khajuraho temples. The festival showcases classical dance forms such as Kathak, Bharatanatyam, Odissi, Kuchipudi, Manipuri and Kathakali.',
                    location: 'Khajuraho, Madhya Pradesh',
                    link: '#/events/khajuraho-dance'
                },
                {
                    id: 4,
                    title: 'Pushkar Camel Fair',
                    category: 'fairs',
                    date: '2023-11-20',
                    image: 'https://source.unsplash.com/600x400/?camel,fair',
                    description: 'One of the world\'s largest camel fairs, this event combines a livestock fair with a religious festival. The event includes camel races, cultural performances, and various competitions alongside religious ceremonies.',
                    location: 'Pushkar, Rajasthan',
                    link: '#/events/pushkar-fair'
                },
                {
                    id: 5,
                    title: 'Kerala Traditional Art Exhibition',
                    category: 'exhibitions',
                    date: '2023-12-15',
                    image: 'https://source.unsplash.com/600x400/?kerala,art',
                    description: 'A comprehensive exhibition showcasing Kerala\'s traditional art forms including Kathakali, Mohiniyattam, Kalaripayattu, and various crafts. Visitors can experience live performances and interactive demonstrations.',
                    location: 'Kochi, Kerala',
                    link: '#/exhibitions/kerala-art'
                },
                {
                    id: 6,
                    title: 'International Yoga Day Celebration',
                    category: 'workshops',
                    date: '2024-06-21',
                    image: 'https://source.unsplash.com/600x400/?yoga,india',
                    description: 'A celebration of yoga, India\'s ancient physical, mental and spiritual practice that has spread across the globe. The event includes mass yoga demonstrations, workshops, and lectures on yogic philosophy.',
                    location: 'New Delhi and across India',
                    link: '#/events/yoga-day'
                },
                {
                    id: 7,
                    title: 'Chennai Music Festival (Margazhi)',
                    category: 'dance',
                    date: '2023-12-15',
                    image: 'https://source.unsplash.com/600x400/?music,classical',
                    description: 'One of the world\'s largest cultural events, featuring more than 1,500 performances of Carnatic music and classical dance. The festival attracts artists and audiences from across the globe celebrating South Indian classical traditions.',
                    location: 'Chennai, Tamil Nadu',
                    link: '#/events/chennai-music'
                },
                {
                    id: 8,
                    title: 'Rann Utsav - Desert Festival',
                    category: 'festivals',
                    date: '2023-11-01',
                    image: 'https://source.unsplash.com/600x400/?desert,festival',
                    description: 'A celebration of the unique landscape and culture of the Rann of Kutch. This three-month-long festival showcases the vibrant culture of Kutch with folk music, dance performances, handicrafts, and the stunning white desert under the full moon.',
                    location: 'Kutch, Gujarat',
                    link: '#/festivals/rann-utsav'
                },
                {
                    id: 9,
                    title: 'Hornbill Festival',
                    category: 'festivals',
                    date: '2023-12-01',
                    image: 'https://source.unsplash.com/600x400/?tribal,festival',
                    description: 'Known as the "Festival of Festivals," this 10-day event celebrates the heritage of Nagaland\'s 16 major tribes. It features traditional music, dance, tribal games, local cuisine, and handicrafts exhibitions.',
                    location: 'Kisama, Nagaland',
                    link: '#/festivals/hornbill'
                },
                {
                    id: 10,
                    title: 'Indian Textile Exhibition',
                    category: 'exhibitions',
                    date: '2024-01-15',
                    image: 'https://source.unsplash.com/600x400/?textile,indian',
                    description: 'A comprehensive exhibition showcasing India\'s diverse textile traditions from across different states. The exhibition features handloom fabrics, embroidery techniques, regional garments, and live demonstrations by master weavers.',
                    location: 'New Delhi',
                    link: '#/exhibitions/textile'
                },
                {
                    id: 11,
                    title: 'Jaipur Literature Festival',
                    category: 'festivals',
                    date: '2024-01-23',
                    image: 'https://source.unsplash.com/600x400/?literature,festival',
                    description: 'The world\'s largest free literary festival bringing together a diverse mix of the world\'s greatest writers, thinkers, philosophers, and entertainers. The festival includes discussions, readings, and musical performances.',
                    location: 'Jaipur, Rajasthan',
                    link: '#/festivals/jaipur-literature'
                },
                {
                    id: 12,
                    title: 'Traditional Indian Cooking Workshop',
                    category: 'workshops',
                    date: '2024-02-10',
                    image: 'https://source.unsplash.com/600x400/?indian,cooking',
                    description: 'A hands-on workshop teaching traditional Indian cooking techniques from different regions. Participants learn about spice blending, traditional cooking methods, and regional variations in Indian cuisine.',
                    location: 'Mumbai, Maharashtra',
                    link: '#/workshops/cooking'
                }
            ]);
        }, 300);
        
        return deferred.promise;
    };
    
    // Get all traditions data
    this.getTraditions = function() {
        const deferred = $q.defer();
        
        // Simulate API call with timeout
        setTimeout(function() {
            deferred.resolve([
                {
                    id: 1,
                    title: 'Bharatanatyam',
                    category: 'dance',
                    region: 'south',
                    image: 'https://source.unsplash.com/600x400/?bharatanatyam,dance',
                    description: 'One of India\'s oldest classical dance forms originating from Tamil Nadu, Bharatanatyam is known for its grace, purity, tenderness, and sculpturesque poses. The dance form was nurtured in the temples of Tamil Nadu. It was codified and documented as a performing art in the early 19th century by four brothers known as the Tanjore Quartet.',
                    origin: 'Tamil Nadu, dating back to 2nd century CE',
                    significance: 'Originally performed in Hindu temples, Bharatanatyam is a way of expressing Hindu religious stories and devotion.',
                    elements: [
                        'Nritta: abstract dance movements',
                        'Nritya: expressive dance combining hand gestures',
                        'Natya: dramatic elements'
                    ]
                },
                {
                    id: 2,
                    title: 'Kathakali',
                    category: 'dance',
                    region: 'south',
                    image: 'https://source.unsplash.com/600x400/?kathakali,dance',
                    description: 'Kathakali is a highly stylized classical Indian dance-drama noted for its elaborate costumes, dramatic makeup, and precise body movements. It originated in Kerala and integrates elements of dance, music, visual arts, and literature. Performances typically depict stories from Hindu epics such as the Mahabharata and Ramayana.',
                    origin: 'Kerala, developed in the 17th century',
                    significance: 'Combines devotion, drama, dance, music, costumes and makeup into a complete artistic experience.',
                    elements: [
                        'Elaborate face painting (different colors represent different characters)',
                        'Intricate costumes weighing up to 30 kg',
                        'Highly expressive eye movements and mudras (hand gestures)'
                    ]
                },
                {
                    id: 3,
                    title: 'Kathak',
                    category: 'dance',
                    region: 'north',
                    image: 'https://source.unsplash.com/600x400/?kathak,dance',
                    description: 'Kathak is one of the eight major forms of Indian classical dance, characterized by rhythmic footwork, graceful movements, and storytelling through expressive gestures. It evolved from the ancient storytellers called Kathakars who recited stories from epics and mythology with music. During the Mughal era, it transformed significantly, incorporating aspects of Persian dance.',
                    origin: 'North India, particularly Uttar Pradesh',
                    significance: 'Represents a unique blend of Hindu and Islamic cultural influences.',
                    elements: [
                        'Intricate footwork (tatkar) with ankle bells',
                        'Pirouettes (chakkar) and subtle expressions (abhinaya)',
                        'Three major gharanas (schools): Jaipur, Lucknow, and Benares'
                    ]
                },
                {
                    id: 4,
                    title: 'Madhubani Painting',
                    category: 'art',
                    region: 'east',
                    image: 'https://source.unsplash.com/600x400/?madhubani,painting',
                    description: 'Madhubani painting is a style of traditional painting practiced in the Mithila region of Bihar. Characterized by geometric patterns, this art form uses natural dyes and pigments and is known for its lack of empty spaces. Traditionally, it was done by women on the mud walls of their homes, but now it has expanded to cloth, handmade paper, and canvas.',
                    origin: 'Mithila region, Bihar',
                    significance: 'Originally created by village women during religious ceremonies and special occasions like weddings.',
                    elements: [
                        'Use of natural dyes and pigments',
                        'Double line borders with intricate geometric patterns',
                        'Religious and natural themes including Hindu deities, nature, and royal scenes'
                    ]
                },
                {
                    id: 5,
                    title: 'Warli Art',
                    category: 'art',
                    region: 'west',
                    image: 'https://source.unsplash.com/600x400/?warli,art',
                    description: 'Warli painting is a tribal art form originating from Maharashtra. It uses a very basic graphic vocabulary: a circle, a triangle, and a square. The circle and triangle come from observations of nature—the circle representing the sun and moon, the triangle derived from mountains and pointed trees. The central motif in these ritual paintings is the square, which is the chauk or chaukat.',
                    origin: 'Tribal regions of Maharashtra',
                    significance: 'Traditionally painted by tribal women, depicting social life and beliefs of the community.',
                    elements: [
                        'White pigment made from rice paste on mud-brown background',
                        'Stick figures engaged in daily activities',
                        'Depiction of community life, celebrations, and connection with nature'
                    ]
                },
                {
                    id: 6,
                    title: 'Phulkari Embroidery',
                    category: 'textiles',
                    region: 'north',
                    image: 'https://source.unsplash.com/600x400/?phulkari,embroidery',
                    description: 'Phulkari, which literally means "flower work," is a traditional embroidery technique from Punjab. This craft involves using brightly colored silk threads to create ornate patterns on handspun cotton fabric (khaddar). Traditionally, Phulkari was embroidered by women for their own use and was an essential part of a bride\'s trousseau.',
                    origin: 'Punjab region (now divided between India and Pakistan)',
                    significance: 'Traditionally made by mothers and grandmothers for a bride\'s trousseau; different designs were created for different occasions.',
                    elements: [
                        'Darning stitch worked from the wrong side of coarse cotton cloth',
                        'Vibrant silk threads creating geometric and floral patterns',
                        'Bagh Phulkari (garden embroidery) covers the entire fabric with no background visible'
                    ]
                },
                {
                    id: 7,
                    title: 'Kanchipuram Silk Sarees',
                    category: 'textiles',
                    region: 'south',
                    image: 'https://source.unsplash.com/600x400/?kanchipuram,silk',
                    description: 'Kanchipuram silk sarees are considered one of the finest silk sarees in India, known for their lustre, durability, and intricate zari work. Woven with pure mulberry silk and gold zari (thread), these sarees are produced in the town of Kanchipuram in Tamil Nadu. A distinguishing feature is the contrasting colors and designs between the body and border of the saree.',
                    origin: 'Kanchipuram, Tamil Nadu',
                    significance: 'Considered auspicious and worn during important ceremonies, weddings, and temple visits.',
                    elements: [
                        'Heavy pure silk with gold zari work',
                        'Distinct borders and pallus (end pieces) with different designs from the body',
                        'Traditional motifs like peacocks, mangoes, and temple designs'
                    ]
                },
                {
                    id: 8,
                    title: 'Dhokra Metal Casting',
                    category: 'art',
                    region: 'east',
                    image: 'https://source.unsplash.com/600x400/?dhokra,metal',
                    description: 'Dhokra is an ancient lost-wax casting technique used to create non-ferrous metal sculptures and figurines. Practiced primarily by the Dhokra Damar tribes of West Bengal and Odisha, this craft tradition dates back to the Indus Valley Civilization. The artifacts created showcase tribal motifs, folk deities, and practical items like measuring bowls and lamps.',
                    origin: 'Eastern and Central India, primarily West Bengal and Odisha',
                    significance: 'One of the earliest known methods of metal casting, dating back over 4,000 years.',
                    elements: [
                        'Lost-wax casting technique (cire perdue)',
                        'Primitive, rustic finish with linear patterns and motifs',
                        'Common themes include tribal people, elephants, peacocks, and religious figures'
                    ]
                },
                {
                    id: 9,
                    title: 'Diwali - Festival of Lights',
                    category: 'festivals',
                    region: 'all',
                    image: 'https://source.unsplash.com/600x400/?diwali,festival',
                    description: 'Diwali, or Deepavali, is one of India\'s most significant festivals celebrated by millions across the country and around the world. The five-day festival symbolizes the spiritual victory of light over darkness and good over evil. Houses, shops, and public places are decorated with small oil lamps called diyas. The festival is associated with Lakshmi, the goddess of prosperity.',
                    origin: 'Ancient India, with references in early Sanskrit texts',
                    significance: 'Celebrates Lord Rama\'s return to Ayodhya after defeating Ravana; also associated with Goddess Lakshmi and Lord Ganesha.',
                    elements: [
                        'Lighting oil lamps and candles around the home',
                        'Creating colorful rangoli designs at entrances',
                        'Exchanging gifts and sweets with family and friends',
                        'Prayers and rituals dedicated to deities, especially Lakshmi'
                    ]
                },
                {
                    id: 10,
                    title: 'Bihu - Assamese New Year',
                    category: 'festivals',
                    region: 'northeast',
                    image: 'https://source.unsplash.com/600x400/?bihu,festival',
                    description: 'Bihu is the most important cultural festival of Assam, celebrated with great enthusiasm across the state. There are three Bihu festivals throughout the year: Bohag Bihu (spring), Kati Bihu (autumn), and Magh Bihu (winter), with Bohag Bihu being the most prominent. Celebrations include traditional dance, music, feasts, and community gatherings.',
                    origin: 'Assam, with pre-Vedic agrarian roots',
                    significance: 'Celebrates seasonal transitions and the agricultural cycle central to Assamese life.',
                    elements: [
                        'Energetic Bihu dance with traditional hand-woven garments',
                        'Playing of traditional instruments like dhol, pepa, and gagana',
                        'Preparation of traditional pithas (rice cakes) and larus (sweet balls)',
                        'Community feasts and cultural competitions'
                    ]
                },
                {
                    id: 11,
                    title: 'Tandoori Cuisine',
                    category: 'cuisine',
                    region: 'north',
                    image: 'https://source.unsplash.com/600x400/?tandoori,food',
                    description: 'Tandoori cuisine is a cooking style that originated in the Punjab region, using a tandoor (a cylindrical clay oven). Foods are marinated in yogurt and spices, then cooked at high temperatures in the tandoor, which imparts a distinctive smoky flavor. The most famous dishes include tandoori chicken, naan bread, and various kebabs.',
                    origin: 'Punjab region in North India',
                    significance: 'Represents one of India\'s most internationally recognized cooking styles.',
                    elements: [
                        'Use of tandoor clay oven that can reach temperatures of 480°C (900°F)',
                        'Yogurt-based marinades with spice blends like garam masala',
                        'Distinctive red-orange color from spices (traditionally from saffron, now often using food coloring)',
                        'Common dishes: tandoori chicken, seekh kebab, naan bread'
                    ]
                },
                {
                    id: 12,
                    title: 'South Indian Cuisine',
                    category: 'cuisine',
                    region: 'south',
                    image: 'https://source.unsplash.com/600x400/?dosa,idli',
                    description: 'South Indian cuisine is characterized by the extensive use of rice, lentils, and local spices. The food tends to be lighter and more vegetarian-focused than North Indian cuisine, with an emphasis on steamed dishes, fresh vegetables, and coconut. Famous dishes include dosa (fermented crepe), idli (steamed rice cake), sambar (lentil stew), and rasam (tamarind soup).',
                    origin: 'Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana',
                    significance: 'Demonstrates the use of fermentation and steaming techniques in Indian cuisine.',
                    elements: [
                        'Rice and lentil-based staples with fermentation techniques',
                        'Liberal use of coconut, curry leaves, and mustard seeds',
                        'Traditional serving style on banana leaves',
                        'Famous dishes: dosa, idli, vada, uttapam, sambar, rasam'
                    ]
                },
                {
                    id: 13,
                    title: 'Kalarippayattu Martial Art',
                    category: 'rituals',
                    region: 'south',
                    image: 'https://source.unsplash.com/600x400/?martial,art',
                    description: 'Kalarippayattu is one of the oldest surviving martial art forms in the world, originating in the southern state of Kerala. It includes strikes, kicks, grappling, weaponry, and healing methods. Training takes place in a kalari (training hall) and begins with body conditioning exercises before progressing to wooden weapons and finally metal weapons.',
                    origin: 'Kerala, dating back at least to the 12th century CE',
                    significance: 'Considered the mother of all martial arts, with influences on Chinese Kung Fu.',
                    elements: [
                        'Combines physical training with spiritual discipline',
                        'Progression from empty-hand techniques to wooden and then metal weapons',
                        'Includes a medical tradition known as Marma Chikitsa (pressure point healing)',
                        'Ritual aspects including prayers to guardian deities'
                    ]
                },
                {
                    id: 14,
                    title: 'Mehndi (Henna) Art',
                    category: 'rituals',
                    region: 'all',
                    image: 'https://source.unsplash.com/600x400/?mehndi,henna',
                    description: 'Mehndi is the application of henna as a temporary body art, predominantly practiced in India, Pakistan, Bangladesh, and other countries where there is significant South Asian influence. The paste is applied in intricate patterns on the hands and feet during special occasions, particularly weddings. Different regions have developed their own distinctive styles and patterns.',
                    origin: 'Ancient India, with evidence dating back to 5000 BCE',
                    significance: 'Traditional bridal adornment symbolizing beauty, joy, and spiritual awakening.',
                    elements: [
                        'Paste made from dried henna leaves',
                        'Regional styles: intricate Rajasthani designs, bold Arabic patterns, delicate Mughal motifs',
                        'Wedding tradition: hidden initials of the groom in bridal mehndi',
                        'Cooling properties beneficial in hot climates'
                    ]
                },
                {
                    id: 15,
                    title: 'Dhunuchi Dance',
                    category: 'dance',
                    region: 'east',
                    image: 'https://source.unsplash.com/600x400/?durga,puja',
                    description: 'Dhunuchi Naach is a ritual folk dance performed during Durga Puja in West Bengal. Dancers hold a dhunuchi (an earthen pot filled with burning coconut husks, camphor, and incense) and perform to the rhythmic beats of the dhak (drum). The dance is an offering to Goddess Durga, with the fragrant smoke believed to please the deity.',
                    origin: 'West Bengal',
                    significance: 'Devotional offering to Goddess Durga during her annual festival.',
                    elements: [
                        'Balancing of burning dhunuchi while dancing',
                        'Performed to the distinctive rhythm of dhak drums',
                        'Both men and women participate, often in traditional Bengali attire',
                        'Competitive aspect with displays of elaborate movements'
                    ]
                },
                {
                    id: 16,
                    title: 'Ghoomar Dance',
                    category: 'dance',
                    region: 'north',
                    image: 'https://source.unsplash.com/600x400/?rajasthani,dance',
                    description: 'Ghoomar is a traditional folk dance from Rajasthan, performed by women in swirling robes. The name is derived from "ghoomna," meaning "to twirl." Originally performed by the Bhil tribe, it was later adopted by other Rajasthani communities, particularly the Rajputs. Women dance in a circular formation, with graceful movements and turns, while singing traditional songs.',
                    origin: 'Rajasthan',
                    significance: 'Traditionally performed on special occasions such as weddings and festivals like Holi.',
                    elements: [
                        'Dancers wear traditional ghagra choli (full skirt and blouse) with a veil',
                        'Circular movements with rhythmic clapping',
                        'Group performance with women moving in circles',
                        'Songs often tell stories of Rajasthani history and legends'
                    ]
                }
            ]);
        }, 300);
        
        return deferred.promise;
    };
}]);
