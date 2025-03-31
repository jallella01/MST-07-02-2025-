/**
 * Main Controller
 * Handles the home page and global navigation functionality
 */
app.controller('mainController', ['$scope', '$location', 'dataService', function($scope, $location, dataService) {
    
    // Check if the current route is active
    $scope.isActive = function(route) {
        return route === $location.path();
    };
    
    // Handle search functionality
    $scope.searchQuery = '';
    $scope.search = function() {
        if ($scope.searchQuery.trim() !== '') {
            dataService.setSearchQuery($scope.searchQuery);
            $location.path('/search-results');
        }
    };
    
    // Home page data
    $scope.featuredTraditions = [];
    $scope.upcomingEvents = [];
    
    // Testimonials
    $scope.testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            title: 'Cultural Enthusiast',
            image: 'https://source.unsplash.com/100x100/?man,indian',
            quote: 'This website has been an incredible resource for learning about my heritage. The depth of information on regional traditions is outstanding.',
            rating: 5
        },
        {
            id: 2,
            name: 'Priya Sharma',
            title: 'Art Historian',
            image: 'https://source.unsplash.com/100x100/?woman,indian',
            quote: 'As someone who studies Indian art forms professionally, I find the gallery section to be both comprehensive and beautifully presented.',
            rating: 4
        },
        {
            id: 3,
            name: 'Michael Thompson',
            title: 'International Tourist',
            image: 'https://source.unsplash.com/100x100/?man,tourist',
            quote: 'Planning my trip to India became so much easier with this cultural guide. I discovered festivals and events that I would have otherwise missed!',
            rating: 5
        }
    ];
    
    // Cultural highlights for the home page
    $scope.culturalHighlights = [
        {
            id: 1,
            title: 'Classical Dance Forms',
            icon: 'fas fa-drum',
            description: 'India has eight classical dance forms recognized by the Sangeet Natak Akademi: Bharatanatyam, Kathak, Kathakali, Kuchipudi, Manipuri, Mohiniyattam, Odissi, and Sattriya.',
            link: '#/traditions?category=dance'
        },
        {
            id: 2,
            title: 'Diverse Festivals',
            icon: 'fas fa-star',
            description: 'Throughout the year, hundreds of festivals are celebrated across India, reflecting its religious and cultural diversity, from Diwali and Holi to Eid and Christmas.',
            link: '#/events'
        },
        {
            id: 3,
            title: 'Rich Textile Heritage',
            icon: 'fas fa-tshirt',
            description: 'India\'s textile tradition spans centuries, with unique techniques like Bandhani, Ikat, Patola, Chanderi, and Banarasi that are prized worldwide for their artistry.',
            link: '#/traditions?category=textiles'
        },
        {
            id: 4,
            title: 'Culinary Diversity',
            icon: 'fas fa-utensils',
            description: 'Indian cuisine varies dramatically by region, with distinctive spice blends, cooking techniques, and ingredients creating a rich tapestry of flavors and traditions.',
            link: '#/traditions?category=cuisine'
        }
    ];
    
    // Load featured traditions
    function loadFeaturedTraditions() {
        dataService.getFeaturedTraditions()
            .then(function(traditions) {
                $scope.featuredTraditions = traditions;
            })
            .catch(function(error) {
                console.error('Error loading featured traditions:', error);
            });
    }
    
    // Load upcoming events
    function loadUpcomingEvents() {
        dataService.getUpcomingEvents()
            .then(function(events) {
                $scope.upcomingEvents = events;
            })
            .catch(function(error) {
                console.error('Error loading upcoming events:', error);
            });
    }
    
    // Initialize the controller
    function init() {
        loadFeaturedTraditions();
        loadUpcomingEvents();
        
        // Initialize animations
        setTimeout(function() {
            if ($scope.$root.initAnimations) {
                $scope.$root.initAnimations();
            }
        }, 100);
    }
    
    // Call the initialization function
    init();
}]);
