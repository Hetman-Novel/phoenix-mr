jQuery(document).ready(function($) {
    Fancybox.bind(".js-inspired-style-comfort-gallery", {
        groupAll: true, // Group all items
        on: {
            ready: (fancybox) => {
               console.log(`fancybox #${fancybox.id} is ready!`);
            }
        }
    });
    Fancybox.bind(".js-weekday-routine-gallery-1102023", {
        groupAll: true, // Group all items
        on: {
            ready: (fancybox) => {
               console.log(`fancybox #${fancybox.id} is ready!`);
            }
        }
    });
    Fancybox.bind(".js-weekday-routine-gallery-30092023", {
        groupAll: true, // Group all items
        on: {
            ready: (fancybox) => {
               console.log(`fancybox #${fancybox.id} is ready!`);
            }
        }
    });
    Fancybox.bind(".js-permissible-documents-gallery", {
        groupAll: true, // Group all items
        on: {
            ready: (fancybox) => {
               console.log(`fancybox #${fancybox.id} is ready!`);
            }
        }
    });
});