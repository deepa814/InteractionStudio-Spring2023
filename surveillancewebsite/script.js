    // Get the webcam video element
        const webcamVideo = document.getElementById('webcam');

        // Check if the browser supports getUserMedia (WebRTC)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request access to the webcam
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                    // Set the webcam stream as the source for the video element
                    webcamVideo.srcObject = stream;
                })
                .catch(function (error) {
                    console.error('Error accessing the webcam:', error);
                });
        } else {
            console.error('WebRTC is not supported in this browser.');
        }