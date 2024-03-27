let arr = [];
const todolist = document.getElementById('todolist');

function save(text) {
    const form = null;

    // 동적 폼 append에 추가(아래 코드 수정 필요)
    todolist.append(text.value);

    arr.push(text.value);
    console.log(arr);
    alert('할 일이 저장되었습니다.');
}