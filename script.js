
        let heartCount = 0;
        let coinCount = 100;
        let copyCount = 0;
        let callHistory = [];
        
        const heartCountElement = document.getElementById('heart-count');
        const coinCountElement = document.getElementById('coin-count');
        const copyCountElement = document.getElementById('navbar-copy-btn');
        const coinButton = document.getElementById('coin-btn');
        const callHistoryList = document.getElementById('call-history');
        const clearHistoryButton = document.getElementById('clear-history');
        
        function updateHeartCount() {
            heartCountElement.textContent = heartCount;
        }
        
        function updateCoinCount() {
            coinCountElement.textContent = coinCount;
            
            if (coinCount < 20) {
                coinButton.classList.add('low-coins');
            } else {
                coinButton.classList.remove('low-coins');
            }
        }
        
        function updateCopyCount() {
            copyCountElement.textContent = `Copy (${copyCount})`;
        }
        
        document.querySelectorAll('.heart-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                heartCount++;
                updateHeartCount();
                
                const heart = this.querySelector('i');
                heart.classList.add('text-red-500', 'heart-animate');
                
                setTimeout(() => {
                    heart.classList.remove('heart-animate');
                }, 800);
            });
        });
        
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.card');
                const serviceNumber = card.querySelector('h1').textContent;
                const serviceName = card.querySelector('h2').textContent;
                
                navigator.clipboard.writeText(serviceNumber).then(() => {
                    alert(`Copied ${serviceNumber} to clipboard`);
                    
                    copyCount++;
                    updateCopyCount();
                    
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                    this.classList.add('btn-success');
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.classList.remove('btn-success');
                    }, 2000);
                });
            });
        });
        
        document.querySelectorAll('.call-btn').forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.card');
                const serviceName = card.querySelector('h2').textContent;
                const serviceNumber = card.querySelector('h1').textContent;
                
                if (coinCount < 20) {
                    alert(`Insufficient coins! You need 20 coins to call ${serviceName}.`);
                    return;
                }
                
                coinCount -= 20;
                updateCoinCount();
                
                alert(`Calling ${serviceName} at ${serviceNumber}`);
                
                const call = {
                    service: serviceName,
                    number: serviceNumber,
                    timestamp: new Date().toLocaleTimeString()
                };
                
                callHistory.unshift(call); // Add to beginning of array
                if (callHistory.length > 5) {
                    callHistory.pop(); // Keep only last 5 calls
                }
                
                updateCallHistory();
            });
        });
        
        function updateCallHistory() {
            callHistoryList.innerHTML = '';
            
            if (callHistory.length === 0) {
                const li = document.createElement('li');
                li.className = 'text-center text-gray-500 py-4';
                li.textContent = 'No call history yet';
                callHistoryList.appendChild(li);
                return;
            }
            
            callHistory.forEach(call => {
                const li = document.createElement('li');
                li.className = 'history-item p-2 bg-gray-100 rounded-md';
                li.innerHTML = `
                    <div class="font-medium">${call.service}</div>
                    <div class="flex justify-between">
                        <span class="text-green-700">${call.number}</span>
                        <span class="text-gray-500 text-xs">${call.timestamp}</span>
                    </div>
                `;
                callHistoryList.appendChild(li);
            });
        }
        
        clearHistoryButton.addEventListener('click', function() {
            callHistory = [];
            updateCallHistory();
        });
        
        updateHeartCount();
        updateCoinCount();
        updateCopyCount();
        updateCallHistory();