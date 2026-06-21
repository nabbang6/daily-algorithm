---
name: commit
description: 현재 변경 사항을 분석해 conventional commits 형식으로 범위별로 나눠 커밋한다. /commit 호출 시 사용한다.
---

# Commit

현재 git 변경 사항을 분석하고 conventional commits 형식으로 커밋을 작성한다.

## Instructions

### Step 1: 변경 사항 파악

아래 명령어를 병렬로 실행한다:

- `git status` — 변경된 파일 목록 확인
- `git diff` — unstaged 변경 내용 확인
- `git diff --cached` — staged 변경 내용 확인
- `git log --oneline -5` — 최근 커밋 스타일 참고

### Step 2: 변경 사항 그룹핑

변경된 파일들을 성격에 따라 그룹으로 묶는다.
예: 설정 파일 변경 / 새 기능 추가 / 버그 수정 / 문서 수정 등

그룹이 하나면 커밋 1개, 여러 성격이 섞여 있으면 그룹별로 커밋을 나눈다.

### Step 3: 커밋 메시지 작성

각 그룹에 대해 아래 형식으로 커밋 메시지를 작성한다:

```
<type>: <제목>
```

**type 종류:**

- `feat` — 새 기능 추가
- `fix` — 버그 수정
- `chore` — 빌드, 설정, 패키지 등 기타 작업
- `docs` — 문서 변경
- `style` — 코드 스타일, 포맷 변경 (동작 변화 없음)
- `refactor` — 리팩토링
- `test` — 테스트 추가/수정

**규칙:**

- 제목은 한국어로, 명사형으로 마무리 (예: `chore: 폴더 세팅`, `feat: 로그인 기능 추가`)
- Co-Authored-By 태그는 절대 추가하지 않는다
- `--no-verify` 옵션은 사용하지 않는다

### Step 4: 커밋 실행

커밋 계획을 사용자에게 보여주고 승인을 받은 후 실행한다.

승인 후 각 그룹별로:

1. 해당 파일만 `git add <파일>` 로 스테이징
2. `git commit -m "$(cat <<'EOF' ... EOF)"` 형식으로 커밋

## 주의사항

- Co-Authored-By 줄을 커밋 메시지에 절대 포함하지 않는다
- `git add .` 또는 `git add -A` 대신 파일을 명시적으로 추가한다
- `.env`, 비밀키 등 민감한 파일이 포함되어 있으면 사용자에게 경고한다
- 커밋 전 반드시 사용자 확인을 받는다
