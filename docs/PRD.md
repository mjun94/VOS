```markdown
# [PRD] V.O.S: Visualized Operation System

- **작성일:** 2026. 02. 24
- **작성자:** 그룹웨어서비스팀 최문준
- **프로젝트 상태:** Concept

---

## 1. 프로젝트 개요 (Project Overview)

### 1.1 프로젝트 정의

**V.O.S(Visualized Operation System)**는 이메일, 메신저, 전화 등 파편화된 채널을 통해 유입되는 비정형 SR(Service Request) 및 시정조치(Corrective Action) 업무를 실시간으로 데이터화하고 시각화하는 운영 지원 솔루션입니다.

### 1.2 추진 배경 (Problem Statement)

- **기록의 누락:** 즉시 처리 후 기록되지 않는 비정형 업무로 인해 실제 리소스 파악 불가.
- **운영자의 저항:** 기존 ITSM의 복잡한 입력 절차로 인한 현업의 기록 기피 현상.
- **가시성 부재:** 업무 채널별 투입 시간 및 업무 성격에 대한 객관적 지표 부족.
- **데이터 신뢰도 저하:** 정형화되지 않은 로그로 인해 업무량 산정 및 고도화 전략 수립 어려움.

---

## 2. 핵심 목표 및 전략 (Goals & Strategy)

### 2.1 Zero-Effort Tracking

- **Workflow Integration:** 업무 흐름을 방해하지 않는 Floating UI 제공.
- **AI Automation:** 텍스트 복사/붙여넣기만으로 입력을 완료하는 AI 기반 자동 파싱 및 분류.

### 2.2 실시간 데이터 가시화

- **Live Dashboard:** 처리 중인 업무를 실시간 연동하여 팀 내 로드 밸런싱(Load Balancing) 최적화.
- **Auto-Reporting:** 수집된 데이터를 기반으로 주간/월간 운영 보고서 자동 생성 기반 마련.

---

## 3. 주요 기능 명세 (Functional Specifications)

### 3.1 V.O.S Mini-Player (Floating UI)

- **Always-on-Top:** 브라우저 탭 이동 시에도 화면 좌/우측 하단에 상주 (Google Meet 스타일).
- **Compact Mode:** 최소한의 인터페이스로 작업 화면 가림 최소화.

### 3.2 AI Smart Input & Classification

- **Context Parser:** 복사한 대화 내용을 붙여넣으면 AI가 요청자명, 요청 일시, 핵심 요약을 자동 추출.
- **Auto-Taxonomy:** 인입 내용을 분석하여 표준 분류 체계(L1/L2/L3) 3단계를 자동으로 매칭.

### 3.3 Multi-Channel Tracking

- **Channel Tagging:** 인입 채널별 태깅 기능 지원 (Email, Google Chat, Phone, ITSM, Etc.).

---

## 4. 기술 아키텍처 (Tech Stack)

| 구분       | 기술 스택               | 목적                                    |
| ---------- | ----------------------- | --------------------------------------- |
| Frontend   | Next.js 16 (App Router) | 고성능 인터페이스 및 서버 컴포넌트 활용 (BFF 패턴) |
| Backend    | Next.js 16 (BFF)        | Server Actions 기반 API 및 인증 관리    |
| Database   | MSSQL (SQL Server)      | 운영 로그 및 분류 마스터 데이터 저장    |
| AI Engine  | Gemini API              | 비정형 데이터 분석 및 분류 자동화       |
| Deployment | GCP Cloud Run           | Edge Runtime 기반의 빠른 응답 속도 확보 |

---

## 5. 데이터 시각화 전략 (Dashboard)

- **Channel Analysis:** 인입 채널별 비중 시각화 (업무 가중 채널 파악).
- **Workload Trend:** 시간대별 업무 집중도 분석을 통한 인력 운영 효율화.
- **AI-Category Heatmap:** 3단계 분류에 따른 상위 인입 이슈 파악 (예방조치 전환 근거 확보).

---

## 6. 기대 효과 (Expected Benefits)

1. **업무 가시화:** 정성적인 '시정조치' 업무를 정량적 수치로 증명하여 KPI 지표로 활용.
2. **생산성 향상:** AI 자동 입력을 통해 운영자의 단순 반복 행정 업무 70% 이상 감소.
3. **의사결정 지원:** 반복적인 L3 항목을 선별하여 향후 시스템 자동화(예방조치) 타겟 설정.
```
