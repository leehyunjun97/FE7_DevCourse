// 모듈
// 파일단위로 기능을 나누고 가져다 쓰기 위한 코드 묶음

// 장점: 러닝커브(학습장벽) 낮추는 결정적인 역할을 합니다
// 언어 자체가 느슨하다는 점

// 단점: 그만큼 코드에 허점이 많아짐
'use strict'; // 엄격 모드
num = 10;

export function sum(a, b) {
  return a + b;
}

export function multiple(a, b) {
  return a * b;
}
