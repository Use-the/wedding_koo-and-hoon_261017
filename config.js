/**
 * Korean Traditional Wedding Invitation Configuration
 * 한국 전통 모바일 청첩장 설정
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,

  // ── 메인 (히어로) ──
  groom: {
    name: "양영훈",
    nameEn: "Younghoon",
    father: "양철호",
    mother: "김규연",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "구세연",
    nameEn: "Seyun",
    father: "구자인",
    mother: "김경숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-17",
    time: "15:00",
    venue: "부산 해운대 팔레드시즈 웨딩홀",
    hall: "B1층 (단독홀)",
    address: "부산 해운대구 해운대해변로298번길 24",
    tel: "051-744-7722",
    mapLinks: {
      kakao: "https://place.map.kakao.com/17184696",
      naver: "https://naver.me/GeUOjHjV"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "양영훈", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "양철호", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김규연", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "구세연", bank: "우리은행", number: "1002-050-982151" },
      { role: "아버지", name: "구자인", bank: "신한은행", number: "110-004-637277" },
      { role: "어머니", name: "김경숙", bank: "신한은행", number: "110-411-806021" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "양영훈 ♥ 구세연 결혼합니다",
    description: "2026년 10월 17일, 소중한 분들을 초대합니다."
  }
};
