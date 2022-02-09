function copy_tel() {
  var copytext_tel = document.getElementById("tel_text");
  copytext_tel.select();
  document.execCommand('copy');
  alert("클립보드에 복사되었습니다.");
}

function copy_kakao() {
  var copytext_kakao = document.getElementById("kakao_text");
  copytext_kakao.select();
  document.execCommand('copy');
  alert("클립보드에 복사되었습니다.");
}

function copy_mail() {
  var copytext_mail = document.getElementById("mail_text");
  copytext_mail.select();
  document.execCommand('copy');
  alert("클립보드에 복사되었습니다.");
}

function copy_discord() {
  var copytext_discord = document.getElementById("discord_text");
  copytext_discord.select();
  document.execCommand('copy');
  alert("클립보드에 복사되었습니다.");
}

