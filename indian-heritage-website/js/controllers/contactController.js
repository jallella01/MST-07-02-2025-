/**
 * Contact Controller
 * Handles the contact form functionality
 */
app.controller('contactController', ['$scope', 'dataService', function($scope, dataService) {
    
    // Contact form model
    $scope.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    
    // Form submission status
    $scope.formSubmitted = false;
    $scope.formSuccess = false;
    $scope.formError = false;
    $scope.errorMessage = '';
    
    // Validate the contact form
    $scope.validateForm = function() {
        if (!$scope.contactForm.name.trim()) {
            $scope.errorMessage = 'Please enter your name.';
            return false;
        }
        
        if (!$scope.contactForm.email.trim()) {
            $scope.errorMessage = 'Please enter your email address.';
            return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test($scope.contactForm.email)) {
            $scope.errorMessage = 'Please enter a valid email address.';
            return false;
        }
        
        if (!$scope.contactForm.subject.trim()) {
            $scope.errorMessage = 'Please enter a subject.';
            return false;
        }
        
        if (!$scope.contactForm.message.trim()) {
            $scope.errorMessage = 'Please enter your message.';
            return false;
        }
        
        return true;
    };
    
    // Submit the contact form
    $scope.submitForm = function() {
        $scope.formSubmitted = true;
        $scope.formSuccess = false;
        $scope.formError = false;
        $scope.errorMessage = '';
        
        if (!$scope.validateForm()) {
            $scope.formError = true;
            return;
        }
        
        // In a real application, this would send the form data to a server
        // For this demo, we'll simulate a successful submission after a short delay
        $scope.isSubmitting = true;
        
        setTimeout(function() {
            $scope.isSubmitting = false;
            $scope.formSuccess = true;
            
            // Reset the form
            $scope.contactForm = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
            
            // Reset form validation state
            if ($scope.contactFormElement) {
                $scope.contactFormElement.$setPristine();
                $scope.contactFormElement.$setUntouched();
            }
            
            // Need to use $apply since we're outside Angular's digest cycle
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }, 1500);
    };
    
    // FAQ items
    $scope.faqItems = [
        {
            question: 'What is the best time to visit cultural festivals in India?',
            answer: 'Festival seasons in India vary by region and tradition. Major festivals like Diwali (October-November), Holi (March), and Navratri (September-October) are celebrated nationwide. However, many regional festivals occur throughout the year. Our events calendar provides up-to-date information on upcoming cultural celebrations.'
        },
        {
            question: 'How can I learn more about a specific Indian art form?',
            answer: 'Our traditions section provides detailed information about various Indian art forms. For more in-depth learning, we recommend visiting cultural centers like Sangeet Natak Akademi, or attending workshops. You can also contact us for specific recommendations based on your interests.'
        },
        {
            question: 'Are there resources for teaching children about Indian culture?',
            answer: 'Yes! We provide educational content suitable for various age groups. Browse our traditions section for stories and simplified explanations of cultural practices. We also organize workshops for children during major cultural festivals - check our events page for details.'
        },
        {
            question: 'How can I contribute to preserving Indian cultural heritage?',
            answer: 'There are many ways to contribute: supporting artisans by purchasing authentic handicrafts, documenting oral traditions, participating in cultural events, or volunteering with heritage conservation organizations. Contact us if you"d like to contribute stories or information to our website.'
        },
        {
            question: 'Where can I purchase authentic Indian handicrafts?',
            answer: 'We recommend government emporiums like Central Cottage Industries Emporium, Khadi Gramodyog Bhavans, and state emporiums which ensure authenticity and fair trade practices. Online marketplaces like India Mart and Crafts Villa also feature verified artisans and their work.'
        }
    ]; // Fixed: Properly closed the FAQ array with a semicolon.
    
    // Store the form element for validation reset
    $scope.setFormElement = function(form) {
        $scope.contactFormElement = form;
    };
    
    // Initialize the controller
    function init() {
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
