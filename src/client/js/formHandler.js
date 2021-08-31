import {checkURL} from './checkURL'

function handleForm(e){
    e.preventDefault();

    const URLInput=document.getElementById('article-url').value;
    const text = document.getElementById('text');
    const agreement = document.getElementById('agreement');
    const subjectivity = document.getElementById('subjectivity');
    const confidence = document.getElementById('confidence');
    const irony = document.getElementById('irony');
    const score_tag = document.getElementById('score_tag');

    if(Client.checkURL(URLInput)){
        console.log("::: Form Submitted :::")
        postData("http://localhost:8081/article", {url: URLInput})
        .then((res) => {
            text.innerHTML = "Text: " + res.sentence_list[0].text;
            agreement.innerHTML = "Agreement: " + res.agreement;
            subjectivity.innerHTML = "Subjectivity: " + res.subjectivity;
            confidence.innerHTML = "Confidence: " + res.confidence;
            irony.innerHTML = "Irony: " + res.irony;
            score_tag.innerHTML = "Score: " + res.score_tag;
        })
    }else{
        alert('it\'s not valid URL')
    }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};

export {handleForm}