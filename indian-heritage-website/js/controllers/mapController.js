/**
 * Map Controller
 * Handles the interactive cultural map of India
 */
app.controller('mapController', ['$scope', 'dataService', function($scope, dataService) {
    
    // Store states data
    $scope.states = [];
    
    // Currently selected state
    $scope.selectedState = null;
    
    // Initialize the map
    function initMap() {
        // Load the SVG map using D3.js
        d3.xml('assets/maps/india-map.svg')
            .then(function(xml) {
                // Append the SVG to the map container
                const mapContainer = document.getElementById('india-map-container');
                mapContainer.appendChild(xml.documentElement);
                
                // Get all state paths
                const statePaths = d3.selectAll('#india-map-container svg path');
                
                // Add event listeners to each state
                statePaths.each(function() {
                    const element = d3.select(this);
                    
                    // Style the states
                    element
                        .style('fill', '#f8f9fa')
                        .style('stroke', '#B71C1C')
                        .style('stroke-width', '1px')
                        .style('cursor', 'pointer')
                        .style('transition', 'fill 0.3s ease');
                    
                    // Add hover effect
                    element
                        .on('mouseover', function() {
                            element.style('fill', '#FFC107');
                        })
                        .on('mouseout', function() {
                            if (!$scope.selectedState || $scope.selectedState.id !== this.id) {
                                element.style('fill', '#f8f9fa');
                            }
                        })
                        .on('click', function() {
                            // Reset previously selected state
                            if ($scope.selectedState) {
                                d3.select('#' + $scope.selectedState.id)
                                    .style('fill', '#f8f9fa');
                            }
                            
                            // Set new selected state
                            const stateId = this.id || this.getAttribute('id');
                            const selectedState = $scope.states.find(state => state.id === stateId);
                            
                            if (selectedState) {
                                $scope.selectedState = selectedState;
                                element.style('fill', '#FF8F00');
                                
                                // Need to use $apply since we're outside Angular's digest cycle
                                $scope.$apply();
                            }
                        });
                });
            })
            .catch(function(error) {
                console.error('Error loading India map SVG:', error);
            });
    }
    
    // Load states data from the data service
    function loadStatesData() {
        dataService.getStatesData()
            .then(function(states) {
                $scope.states = states;
                
                // Initialize the map after loading the states data
                initMap();
            })
            .catch(function(error) {
                console.error('Error loading states data:', error);
            });
    }
    
    // Initialize the controller
    function init() {
        loadStatesData();
        
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
