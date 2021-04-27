# YoutuBe 반응형 모바일 (클론코딩)

## 개요

유튜브의 동영상 재생 화면 중 일부를 반응형 모바일 버전으로 직접 코딩을 해보며 그동안 공부한 문법을 일부 적용해보고 또 구글링과 관련 사이트의 정보를 통해 동영상 재생이나 태그의 여러가지 옵션을 새롭게 알게 되었고, css를 좀 더 다양하게 적용해 볼 수 있었다.

## 모바일 실행화면

1. 아이폰 5/SE (320 X 568)

   ![아이폰5E](https://user-images.githubusercontent.com/63761624/116227724-687b3900-a78f-11eb-8fb6-4920c1fe3933.PNG)

2. 아이폰 6,7,8 (375 X 667)

   ![아이폰6,7,8](https://user-images.githubusercontent.com/63761624/116227898-98c2d780-a78f-11eb-9e78-d5973051bcb1.PNG)

3. 아이폰 6,7,8 PLUS (414 X 736)

   ![아이폰6,7,8 PLUS](https://user-images.githubusercontent.com/63761624/116227989-b09a5b80-a78f-11eb-8b1b-2d151ca9adf8.PNG)

4. 아이폰 X (375 X 812)

   ![아이폰X](https://user-images.githubusercontent.com/63761624/116228044-c0b23b00-a78f-11eb-80ab-ee39eddd0e54.PNG)

5. 갤럭시 S5 (360 X 640)

   ![갤럭시S5](https://user-images.githubusercontent.com/63761624/116228102-d32c7480-a78f-11eb-8d35-58298d108e85.PNG)

## 사용 언어

HTML, CSS, JavaScript

## Point of Interest 및 느낀 점

1. 텍스트가 적정 길이 이상이 되면 일부가 숨겨져서 보이는 기능

- 이전까지는 **overflow:hidden; text-overflow:ellipsis; white-space:nowrap;** 를 이용하여 텍스트의 길이를 제한하였는데 이번에는 **display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;** 속성을 적용해보았다. 적정 길이 이상이 되면 자동으로 나머지 테스트가 숨겨지고 이와 함께 버튼 태그에 자바스크립트 속성을 추가하여 버튼을 누르면 나머지 텍스트가 나타나도록 하였다.

- 새로운 CSS 속성을 사용하였는데 오히려 텍스트 줄 갯수를 직접 설정할 수 있어서 더 사용이 편리하고 효율적이라는 생각이 들었다.

2. 화면을 보고 디자인 및 기능 구현을 어느정도 혼자서 할 수 있지만 아직까지는 코드의 길이가 너무 길고 자칫 낭비로 보일 수 있을 정도여서 좀 더 효율적으로 html, css, js 코드를 작성할 수 있도록 구글링과 mdn 등의 사이트를 보며 공부 해야겠다. 또한 이 유튜브 클론코딩은 정말 간단한 페이지를 작업한 것이기 때문에 이후에는 더 다양한 페이지와 유튜브의 api를 가져와서 사용해보고 싶다.
