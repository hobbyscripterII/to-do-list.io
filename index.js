const todolist = document.getElementById('ol-todolist');

// >>>>> 재사용 위해 메소드로 추출
function addTodolist(text) {
    // 노드 제어를 통한 동적 요소 생성
    const newLi = document.createElement('li'); // todolist ul에 들어갈 새로운 요소 추가
    newLi.id = 'li-tasking';
    const newText = document.createTextNode(text); // newLi에 들어갈 새로운 텍스트 노드 추가

    const delBtn = document.createElement('button'); // newLi에 들어갈 새로운 요소 추가
    delBtn.classList.add('btn', 'btn-danger'); // 버튼에 클래스 추가(bootswatch 클래스)
    delBtn.id = 'btn-del'; // 해당 요소에 id 추가
    delBtn.type = 'button'; // 해당 요소에 type 추가
    delBtn.innerText = '삭제'; // text 추가

    // appendChild는 하나의 자식만 가질 수 있지만 append는 여러 개의 자식을 가질 수 있다.
    newLi.append(newText, delBtn); // li 태그와 button 태그를 같이 추가
    todolist.appendChild(newLi);
}

document.querySelector('#btn-save').addEventListener('click', function() {
    addTodolist(text.value); // * id가 text인 input에 value를 받아 옴
});

document.addEventListener('click', function(e) {
    // 삭제 버튼 클릭 시 해당 함수 실행
    if(e.target.id == 'btn-del') {
        const target = e.target.parentNode;
        const targetValue = target.innerText.replace('삭제', '');
        const parentNode = target.parentNode;

        if(confirm(`${targetValue}을(를) 삭제하시겠습니까?`)) {
            alert(`${targetValue}이 삭제되었습니다.`);
            parentNode.removeChild(target);
        } else {
            alert('삭제가 취소되었습니다.');
        }
    }
});

document.addEventListener('dblclick', function(e) {
    // '진행중인 할 일' 내에 li 요소 더블 클릭 시 이벤트 발생
    if(e.target.id == 'li-tasking') {
        // 1. '완료된 할 일'에 li 추가하기 위한 세팅 작업
        const newLi = document.createElement('li');
        newLi.id = 'li-sus';
        const target = e.target;
        const targetValue = target.innerText.replace('삭제', '');
        const newText = document.createTextNode(targetValue);
        newLi.append(newText);
        
        const successTodolist = document.getElementById('ul-todolist-success');
        successTodolist.append(newLi);
        
        // 2. '진행중인 할 일'에서 클릭한 요소 삭제
        // target - li
        // parentNode - ol
        const parentNode = target.parentNode;
        parentNode.removeChild(target); // 부모 노드 호출 후 이벤트 발생한 자식 노드 삭제
    }

    // '완료된 할 일' 내에 li 요소 더블 클릭 시 이벤트 발생
    if(e.target.id == 'li-sus') {
        addTodolist(e.target.innerText); // * 해당 이벤트가 발생한 타겟의 text를 받아 옴

        const successTodolist = document.getElementById('ul-todolist-success');
        const target = e.target;
        successTodolist.removeChild(target);
    }
});