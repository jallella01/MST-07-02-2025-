/**
 * Gallery Controller
 * Handles the gallery page functionality including filtering and viewing images
 */
app.controller('galleryController', ['$scope', 'dataService', function($scope, dataService) {
    
    // Gallery categories
    $scope.categories = [
        { id: 'all', name: 'All' },
        { id: 'architecture', name: 'Architecture' },
        { id: 'art', name: 'Art & Crafts' },
        { id: 'dance', name: 'Dance Forms' },
        { id: 'festivals', name: 'Festivals' },
        { id: 'textiles', name: 'Textiles & Fashion' },
        { id: 'cuisine', name: 'Cuisine' }
    ];
    
    // Set initial active category
    $scope.activeCategory = 'all';
    
    // Full gallery items collection
    $scope.allGalleryItems = [];
    
    // Filtered gallery items (based on active category)
    $scope.galleryItems = [];
    
    // Set active category and filter gallery items
    $scope.setCategory = function(categoryId) {
        $scope.activeCategory = categoryId;
        filterGalleryItems();
    };
    
    // Filter gallery items based on active category
    function filterGalleryItems() {
        if ($scope.activeCategory === 'all') {
            $scope.galleryItems = [...$scope.allGalleryItems];
        } else {
            $scope.galleryItems = $scope.allGalleryItems.filter(item => 
                item.category === $scope.activeCategory
            );
        }
    }
    
    // Get all gallery items from the data service
    function loadGalleryItems() {
        dataService.getGalleryItems()
            .then(function(items) {
                $scope.allGalleryItems = items;
                filterGalleryItems();
            })
            .catch(function(error) {
                console.error('Error loading gallery items:', error);
            });
    }
    
    // Selected gallery item for detail view
    $scope.selectedItem = null;
    
    // Show detail view for a gallery item
    $scope.showDetail = function(item) {
        $scope.selectedItem = item;
        $('#galleryDetailModal').modal('show');
    };
    
    // Close the detail view
    $scope.closeDetail = function() {
        $('#galleryDetailModal').modal('hide');
        $scope.selectedItem = null;
    };
    
    // Initialize the controller
    function init() {
        loadGalleryItems();
        
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
