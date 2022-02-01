import React from "react";
import {useRef} from "react";

const Form = ({ updateMainCat }) => {
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

    const line = useRef();
    const [value, setValue] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");
  
    function handleInputChange(e) {
      const userValue = e.target.value;
      line.current.style.borderColor = "black";
      if (includesHangul(userValue)) {
        setErrorMessage("한글은 입력할 수 없습니다.");
        line.current.style.borderColor = "red";
      }
      setValue(userValue.toUpperCase());
    }
  
    function handleFormSubmit(e) {
      e.preventDefault();
      setErrorMessage("");
      line.current.style.borderColor = "black";
  
      if (value === "") {
        setErrorMessage("빈 값으로 만들 수 없습니다.");
        line.current.style.borderColor = "red";
        return;
      }
      updateMainCat(value);
    }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <input class="ipt"
          ref={line}
          type="text"
          name="name"
          placeholder="영어 대사를 입력해주세요"
          value={value}
          onChange={handleInputChange}
        />
        <button class="btn" type="submit">생성</button>
        <div id="error">{errorMessage}</div>
      </form>
    );
  };

  export default Form;