// ============================================================
//  atoman 갤러리 데이터 — 사진/디자인/프로젝트 목록
// ============================================================
//  사진 추가하는 법:
//    1) GitHub의 images/<카테고리>/ 폴더에 사진 파일을 올린다
//    2) 아래 GALLERY 배열에 한 줄 추가한다:
//         { src: "images/model/02.avif", type: "photo", cat: "model", w: 1500, h: 1000 },
//    3) Commit → Vercel이 1분 안에 자동 배포
//
//  각 항목 설명:
//    src  = 사진 파일 경로 (images/카테고리/파일명.avif)
//    type = "photo"  → 클릭 시 라이트박스 팝업
//           "design" → 클릭 시 Behance 새 탭 (이때 href 도 같이 적기)
//    cat  = Photography 서브탭 분류: "model" / "snap" / "street" / "landscape"
//           (design 타입은 cat 없어도 됨)
//    w, h = 사진의 가로/세로 픽셀. 비율 계산용. (예: 가로사진 1500x1000, 세로사진 1000x1500)
//           → 정확한 원본 비율만 지키면 됨. 실제 픽셀수 안 맞아도 비율만 맞으면 OK.
//    href = design 타입일 때만. 클릭하면 열릴 Behance 주소.
// ============================================================

const GALLERY = [
  // ↓↓↓ 여기부터 사진 목록. 한 줄이 사진 한 장. ↓↓↓

  { src: "images/model/test.avif", type: "photo", cat: "model", w: 2000, h: 1333 },

  // 예시) 사진 더 넣을 때 이렇게 아래에 계속 추가:
  // { src: "images/model/02.avif",   type: "photo",  cat: "model",     w: 1000, h: 1500 },
  // { src: "images/snap/01.avif",    type: "photo",  cat: "snap",      w: 1500, h: 1000 },
  // { src: "images/street/01.avif",  type: "photo",  cat: "street",    w: 1500, h: 1000 },
  // { src: "images/landscape/01.avif", type: "photo", cat: "landscape", w: 1500, h: 1000 },
  // 디자인 카드(클릭 시 Behance로 이동)는 이렇게:
  // { src: "images/design/01.avif",  type: "design", href: "https://www.behance.net/gallery/000/01", w: 1500, h: 1000 },

  // ↑↑↑ 여기까지 사진 목록 ↑↑↑
];

// ---- Design 탭 프로젝트 (AI Creative / Graphic & Branding) ----
//  프로젝트 추가는 아래 배열에 한 덩어리 복붙 후 내용만 교체.
//  tab: "ai" = AI Creative 탭,  "graphic" = Graphic & Branding 탭
const PROJECTS = [
  { tab: "ai",      title: "프로젝트 제목 1", date: "기간", designer: "디자이너 이름",
    hero: { w: 1600, h: 720 }, credits: ["크레딧 1", "크레딧 2", "크레딧 3"],
    textKo: "국문 설명 자리", textEn: "영문 설명 자리" },
  { tab: "ai",      title: "프로젝트 제목 2", date: "기간", designer: "디자이너 이름",
    hero: { w: 1600, h: 900 }, credits: ["크레딧 1", "크레딧 2", "크레딧 3"],
    textKo: "국문 설명 자리", textEn: "영문 설명 자리" },
  { tab: "graphic", title: "프로젝트 제목 1", date: "기간", designer: "디자이너 이름",
    hero: { w: 1600, h: 800 }, credits: ["크레딧 1", "크레딧 2", "크레딧 3"],
    textKo: "국문 설명 자리", textEn: "영문 설명 자리" },
  { tab: "graphic", title: "프로젝트 제목 2", date: "기간", designer: "디자이너 이름",
    hero: { w: 1600, h: 640 }, credits: ["크레딧 1", "크레딧 2", "크레딧 3"],
    textKo: "국문 설명 자리", textEn: "영문 설명 자리" },
];

// 렌더러가 읽어가는 부분 — 손대지 말 것
window.GALLERY = GALLERY;
window.PROJECTS = PROJECTS;
