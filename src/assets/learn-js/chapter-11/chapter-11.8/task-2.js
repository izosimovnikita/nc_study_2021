class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let urlA = await fetch(url);

    if (urlA.status === 200) {
        return urlA.json();
    } else {
        throw new HttpError(urlA);
    }
}

async function demoGithubUser() {
    let fullName;
    while (true) {
        let name = prompt("Введите логин?", "iliakan");

        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            fullName = user.name;
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response.status === 400) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }

    console.log(fullName);
    return fullName;
}

demoGithubUser();