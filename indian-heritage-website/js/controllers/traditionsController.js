/**
 * Traditions Controller
 * Handles the traditions and cultural practices page functionality
 */
app.controller('traditionsController', ['$scope', '$location', 'dataService', function($scope, $location, dataService) {
    
    // Tradition categories
    $scope.categories = [
        { id: 'all', name: 'All Traditions' },
        { id: 'dance', name: 'Dance Forms' },
        { id: 'music', name: 'Music' },
        { id: 'art', name: 'Art & Craft' },
        { id: 'textiles', name: 'Textiles & Fashion' },
        { id: 'cuisine', name: 'Cuisine' },
        { id: 'festivals', name: 'Festivals & Celebrations' },
        { id: 'rituals', name: 'Rituals & Practices' }
    ];
    
    // Region filters
    $scope.regions = [
        { id: 'all', name: 'All Regions' },
        { id: 'north', name: 'North India' },
        { id: 'south', name: 'South India' },
        { id: 'east', name: 'East India' },
        { id: 'west', name: 'West India' },
        { id: 'central', name: 'Central India' },
        { id: 'northeast', name: 'Northeast India' }
    ];
    
    // Set initial active filters
    $scope.activeCategory = 'all';
    $scope.activeRegion = 'all';
    
    // Check URL parameters for initial filter settings
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('category')) {
        const category = urlParams.get('category');
        if ($scope.categories.some(c => c.id === category)) {
            $scope.activeCategory = category;
        }
    }
    
    if (urlParams.has('region')) {
        const region = urlParams.get('region');
        if ($scope.regions.some(r => r.id === region)) {
            $scope.activeRegion = region;
        }
    }
    
    // Full traditions collection
    $scope.allTraditions = [];
    
    // Filtered traditions (based on active filters)
    $scope.filteredTraditions = [];
    
    // Currently selected tradition for detailed view
    $scope.selectedTradition = null;
    
    // Set active category and filter traditions
    $scope.setCategory = function(categoryId) {
        $scope.activeCategory = categoryId;
        filterTraditions();
        updateUrlParams();
    };
    
    // Set active region and filter traditions
    $scope.setRegion = function(regionId) {
        $scope.activeRegion = regionId;
        filterTraditions();
        updateUrlParams();
    };
    
    // Update URL parameters to reflect current filters
    function updateUrlParams() {
        let searchParams = {};
        
        if ($scope.activeCategory !== 'all') {
            searchParams.category = $scope.activeCategory;
        }
        
        if ($scope.activeRegion !== 'all') {
            searchParams.region = $scope.activeRegion;
        }
        
        // Update URL without reloading page
        const url = Object.keys(searchParams).length > 0 
            ? '?'+ new URLSearchParams(searchParams).toString() 
            : '';
        
        // Use $location to update URL
        $location.search(searchParams);
    }
    
    // Filter traditions based on active category and region
    function filterTraditions() {
        let result = [...$scope.allTraditions];
        
        if ($scope.activeCategory !== 'all') {
            result = result.filter(tradition => tradition.category === $scope.activeCategory);
        }
        
        if ($scope.activeRegion !== 'all') {
            result = result.filter(tradition => tradition.region === $scope.activeRegion);
        }
        
        $scope.filteredTraditions = result;
    }
    
    // Show detailed view for a tradition
    $scope.showDetail = function(tradition) {
        $scope.selectedTradition = tradition;
        $('#traditionDetailModal').modal('show');
    };
    
    // Close the detailed view
    $scope.closeDetail = function() {
        $('#traditionDetailModal').modal('hide');
        $scope.selectedTradition = null;
    };
    
    // Get all traditions from the data service
    function loadTraditions() {
        dataService.getTraditions()
            .then(function(traditions) {
                $scope.allTraditions = traditions;
                filterTraditions();
            })
            .catch(function(error) {
                console.error('Error loading traditions:', error);
            });
    }
    
    // Initialize the controller
    function init() {
        loadTraditions();
        
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
