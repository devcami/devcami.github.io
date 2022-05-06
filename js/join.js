//id 미리알림 
memberId.onblur = () => {
  if(!/^[a-z0-9]{4,16}$/.test(memberId.value)){
    memberId.style.border = "2px solid #ff0000";
  }
  else{
    memberId.style.border = "1px solid #d5d5d5";
  }
};
//pwd 미리알림
memberPwd.onblur = () => {
  if(!/^(?=.*[a-zA-Z0-9])(?=.*[a-zA-Z!@#$%^&*])(?=.*[0-9!@#$%^&*]).{8,16}$/i.test(memberPwd.value)){
    memberPwd.style.border = "2px solid #ff0000";
  }
  else{
    memberPwd.style.border = "1px solid #d5d5d5";
  }
};
//pwd일치 check
checkPwd.onblur = () => {
  if(memberPwd.value !== checkPwd.value){
    checkPwd.style.border = "2px solid #ff0000";
  }
  else{
    checkPwd.style.border = "1px solid #d5d5d5";
  }
};
//name 미리알림
memberName.onblur = () => {
  if(!/^[가-힣]{2,8}$/.test(memberName.value)){
    memberName.style.border = "2px solid #ff0000";
  }
  else{
    memberName.style.border = "1px solid #d5d5d5";
  }
};

/**
 * 최종 유효성검사
 */
btnJoinSubmit.addEventListener('click', (e) => {
  //checking ID duplication 
  const members = JSON.parse(localStorage.getItem('members'));
  const idVal = document.querySelector('#memberId').value;
  members.forEach((member) => {
    if(idVal == member.memberId){
      alert('이미 존재하는 아이디입니다.');
      memberId.select();
      e.preventDefault();
      return;
    } 
  });

  //id verification
  if(!/^[a-z0-9]{4,16}$/.test(memberId.value)){
    alert('아이디 조건에 유효하지 않습니다.');
    memberId.select();
    e.preventDefault();
    return;
  }
  //password verification
  if(!/^(?=.*[a-z0-9])(?=.*[a-z!@#$%^&*])(?=.*[0-9!@#$%^&*]).{8,16}$/i.test(memberPwd.value)){
    alert('비밀번호 조건에 유효하지 않습니다.');
    memberPwd.select();
    e.preventDefault();
    return;
  }
  //password double check
  if(memberPwd.value !== checkPwd.value){
    alert('비밀번호 확인이 일치하지 않습니다.');
    checkPwd.select();
    e.preventDefault();
    return;
  }
  
  //name verification
  if(!/^[가-힣]{2,8}$/.test(memberName.value)){
    alert('이름 조건에 유효하지 않습니다.');
    memberName.select();
    e.preventDefault();
    return;
  }
  //mobile verification
  if(!/[0-9]{3,4}/.test(mobile2.value)){
    alert('휴대전화 조건에 유효하지 않습니다. 앞자리 : 3자리 이상');
    mobile2.select();
    e.preventDefault();
    return;
  }
  if(!/[0-9]{4}/.test(mobile3.value)){
    alert('휴대전화 조건에 유효하지 않습니다. 뒷자리 : 4자리');
    mobile3.select();
    e.preventDefault();
    return;
  }
  
  //email verification
  if(!/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(memberEmail.value)){
    alert('이메일 조건에 유효하지 않습니다.');
    memberEmail.select();
    e.preventDefault();
    return;
  }

  alert('회원가입이 완료되었습니다.');
});

/**
 * submit & save member info 
 */
const saveMember = () => {
  const memberId = document.querySelector('#memberId').value;
  const memberPwd = document.querySelector('#memberPwd').value;
  const memberName = document.querySelector('#memberName').value;
  const mobile = '010' + document.querySelector('#mobile2').value + document.querySelector('#mobile3').value;
  const memberEmail = document.querySelector('#memberEmail').value;

  
  const member = new Member(memberId, memberPwd, memberName, mobile, memberEmail);
  
  const members = JSON.parse(localStorage.getItem('members')) || [];

  members.push(member);

  localStorage.setItem('members', JSON.stringify(members));

  document.memberFrm.reset();
  return members;
};

class Member {
  constructor(memberId, memberPwd, memberName, mobile, memberEmail){
    this.memberId = memberId;
    this.memberPwd = memberPwd;
    this.memberName = memberName;
    this.mobile = mobile;
    this.memberEmail = memberEmail;
  }
};