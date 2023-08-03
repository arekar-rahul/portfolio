import React, { useEffect, useRef } from 'react';

const WebSocketComponent: React.FC = () => {
    const webSocketRef = useRef<WebSocket | null>(null);

    useEffect(() => {
        // Replace 'ws://127.0.0.1:59598/' with your WebSocket server URL
        const webSocketUrl = 'ws://127.0.0.1:59598/';

        // Create the WebSocket connection when the component mounts
        webSocketRef.current = new WebSocket(webSocketUrl);

        // Event listener for when the connection is established
        webSocketRef.current.onopen = () => {
            console.log('WebSocket connection established.');
            // You can perform any actions here once the connection is open
        };

        // Event listener for receiving messages from the server
        webSocketRef.current.onmessage = (event) => {
            console.log('Received message:', event.data);
            // Handle the incoming message from the server
        };

        // Event listener for WebSocket errors
        webSocketRef.current.onerror = (event) => {
            console.error('WebSocket error:', event);
        };

        // Event listener for WebSocket connection close
        webSocketRef.current.onclose = (event) => {
            console.log('WebSocket connection closed:', event.code, event.reason);
        };

        // Clean up the WebSocket connection on component unmount
        return () => {
            if (webSocketRef.current) {
                webSocketRef.current.close();
            }
        };
    }, []); // Empty dependency array ensures that this effect runs only once on component mount

    return (
        <div>
            {/* Your component's JSX content here */}
        </div>
    );
};

export default WebSocketComponent;
