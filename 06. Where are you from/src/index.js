// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

/*
개발일지
1. html 파일에서 option의 value 값을 지정
2. user가 select에서 option을 선택할 때, 그 value 값을 받아오는 코드 작성
  참고: https://velog.io/@rlatmdgns94/Javascript-select-option-text-value-%EC%86%8D%EC%84%B1-%EA%B0%92-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
3. 그 value를 local storage에 저장
4. user가 select에서 option을 선택할 때, 2번 ~ 3번 실행하는 코드 작성
  참고: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event#select_element
5. 새로고침해도 선택한 option이 유지되도록 하는 코드 작성
*/

const lsValue = localStorage.getItem("country");
var countrySelect = document.querySelector("#country");

function init() {
  // 페이지가 로딩될 때, local storage의 value 값을 select의 기본 값으로 지정
  if (lsValue !== null) {
    countrySelect.value = lsValue;
  }

  // option 선택 시마다, value 값을 받아서 local storage에 저장
  countrySelect.addEventListener("change", (event) => {
    var userCountry = countrySelect.options[countrySelect.selectedIndex].value;
    localStorage.setItem("country", userCountry);
  });
}

init();

/*

/*
2021년 1월 18일
algorithm note
1. HTML의 select에서 사용자가 나라 option을 선택한다.
2. 선택한 나라의 정보를 받아 local storage에 저장한다.
3. 페이지가 로딩 될 때 local storage에 정보를 받아 기본값으로 지정한다.

var select = document.querySelector("select");

const COUNTRY_LS = "Country";

function setCountry() {
  var countryVal = select[select.selectedIndex].value;
  console.log(countryVal);
  localStorage.setItem(COUNTRY_LS, countryVal);
}

select.addEventListener("change", setCountry);

const userCountry = localStorage.getItem(COUNTRY_LS);
if (COUNTRY_LS !== null) {
  select.value = userCountry;
}

*/
