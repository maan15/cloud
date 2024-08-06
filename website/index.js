const Url = 'https://kzepafm5l42qdm4ta272jxqt2u0iclsz.lambda-url.us-east-1.on.aws/';
const counter = document.querySelector(".views");
async function updateCounter() {
    try {
        let response = await fetch(Url);
                if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        let data = await response.text();
        console.log('API Response:', data);
        counter.innerHTML = ` ${data} views!`;

    } catch (error) {
        console.error('Error:', error);
        counter.innerHTML = `Failed to retrieve view count. Error: ${error.message}`;
    }
}
updateCounter();
