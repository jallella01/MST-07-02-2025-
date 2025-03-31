/**
 * Events Controller
 * Handles the cultural events calendar functionality
 */
app.controller('eventsController', ['$scope', 'dataService', function($scope, dataService) {
    
    // Event categories
    $scope.categories = [
        { id: 'all', name: 'All Events' },
        { id: 'festivals', name: 'Festivals' },
        { id: 'dance', name: 'Dance & Music' },
        { id: 'exhibitions', name: 'Exhibitions' },
        { id: 'workshops', name: 'Workshops' },
        { id: 'fairs', name: 'Cultural Fairs' }
    ];
    
    // Time filters
    $scope.timeFilters = [
        { id: 'upcoming', name: 'Upcoming' },
        { id: 'this-month', name: 'This Month' },
        { id: 'next-month', name: 'Next Month' },
        { id: 'this-year', name: 'This Year' }
    ];
    
    // Set initial active filters
    $scope.activeCategory = 'all';
    $scope.activeTimeFilter = 'upcoming';
    
    // Full events collection
    $scope.allEvents = [];
    
    // Filtered events (based on active filters)
    $scope.filteredEvents = [];
    
    // Set active category and filter events
    $scope.setCategory = function(categoryId) {
        $scope.activeCategory = categoryId;
        filterEvents();
    };
    
    // Set active time filter and filter events
    $scope.setTimeFilter = function(filterId) {
        $scope.activeTimeFilter = filterId;
        filterEvents();
    };
    
    // Filter events based on active category and time filter
    function filterEvents() {
        // First filter by category
        let result = $scope.allEvents;
        
        if ($scope.activeCategory !== 'all') {
            result = result.filter(event => event.category === $scope.activeCategory);
        }
        
        // Then filter by time
        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        
        switch ($scope.activeTimeFilter) {
            case 'upcoming':
                result = result.filter(event => new Date(event.date) >= today);
                break;
            case 'this-month':
                result = result.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.getMonth() === currentMonth && 
                           eventDate.getFullYear() === currentYear;
                });
                break;
            case 'next-month':
                result = result.filter(event => {
                    const eventDate = new Date(event.date);
                    let nextMonth = currentMonth + 1;
                    let yearOfNextMonth = currentYear;
                    
                    if (nextMonth > 11) {
                        nextMonth = 0;
                        yearOfNextMonth++;
                    }
                    
                    return eventDate.getMonth() === nextMonth && 
                           eventDate.getFullYear() === yearOfNextMonth;
                });
                break;
            case 'this-year':
                result = result.filter(event => {
                    const eventDate = new Date(event.date);
                    return eventDate.getFullYear() === currentYear;
                });
                break;
            default:
                // No additional filtering
                break;
        }
        
        // Sort by date (closest first)
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        $scope.filteredEvents = result;
    }
    
    // Format date for display
    $scope.formatDate = function(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    
    // Get all events from the data service
    function loadEvents() {
        dataService.getEvents()
            .then(function(events) {
                $scope.allEvents = events;
                filterEvents();
            })
            .catch(function(error) {
                console.error('Error loading events:', error);
            });
    }
    
    // Initialize the controller
    function init() {
        loadEvents();
        
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
