'use strict'

// Callback Hell example 
class UserStorage {
    // 해당 정보가 맞으면 로그인하는 함수
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error(`not found`));
                }
            }, 2000);
        });
    }

    // 사용자 정보 가져오기
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({
                        name: 'ellie',
                        role: 'admin'
                    });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000); // 1초뒤에 코드블럭이 실행되며 각각 오브젝트를 인자로 전달함
        })

    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id'); // 사용자 입력받는 함수
const password = prompt('enter your password'); // 사용자 입력받는 함수
login();
// 에러가 나면 바로 맨 밑의 catch로 넘어감
// userStorage
//     .loginUser(id, password)
//     .then(userStorage.getRoles)
//     .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
//     .catch(console.log);

// await으로 바꿔보기
async function login(){
    try{
        const user = await userStorage.getRoles(await userStorage.loginUser(id,password));
        return alert(`Hello ${user.name}, you have a ${user.role} role`);
    }catch(error){
        console.log(error);
    } 
}
