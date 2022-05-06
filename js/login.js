btnLogin.addEventListener('click', (e) => {
  
  const members = JSON.parse(localStorage.getItem('members')) || [];
  const idVal = document.querySelector('#memberId').value;
  const pwdVal = document.querySelector('#memberPwd').value;

  for(let i = 0; i < members.length; i++){
    if(members[i].memberId == idVal && members[i].memberPwd == pwdVal){
      alert(`로그인 완료! 어서오세요 ${members[i].memberName}님 😄`);
    }
    else {
      alert('아이디 또는 비밀번호를 잘못 입력하셨습니다.');
      e.preventDefault();
      return;
    }
  }
});

const completeLogin = () => {
  location.href="main.html";
};