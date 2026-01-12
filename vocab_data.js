// 檔案名稱：vocab_data.js
// 這裡只放資料，不要放程式邏輯

    // ================= 1. 資料處理 (請在此貼上單字) =================
    const rawData = `
        ### 第一回 (1-5 冊)
1. sentence (n.) 句子; 判刑
4. dispense (v.) 分配；發放
5. context (n.) 語境；背景
6. refresh (v.) 使清新；更新
7. tattoo (n.) 刺青
8. elaborate (v.) 詳細說明
10. solemn (adj.) 莊嚴的；嚴肅的
11. fragrant (adj.) 芬芳的
17. insult (v.) 侮辱
21. verbally (adv.) 口頭地
25. refusal (n.) 拒絕
26. proposal (n.) 提議
29. advance (n./v.) 前進；進展
31. reproduction (n.) 繁殖；複製
32. rhino (n.) 犀牛
33. not necessarily (adv. phr.) 不必然地
35. extinction (n.) 絕種
36. intuition (n.) 直覺
37. milestone (n.) 里程碑
38. prompt (adj.) 迅速的；即時的
41. trigger (v.) 觸發；引起
42. collective (adj.) 集體的
43. injustice (n.) 不公義；不公平
45. revenge (n.) 復仇
46. landslide (n.) 土石流；壓倒性勝利
47. welfare (n.) 福利
51. cultivate (v.) 培養；耕種
53. obtain (v.) 獲得
55. venue (n.) 場地
56. norm (n.) 規範
57. intense (adj.) 強烈的
58. crucial (adj.) 關鍵的
61. chilly (adj.) 寒冷的；冷颼颼的
62. pedestrian (n.) 行人
63. sprain (v./n.) 扭傷
64. tuck (v.) 塞進；摺疊
67. consciously (adv.) 有意識地
68. unconsciously (adv.) 無意識地
69. on a daily basis (adv. phr.) 每天；日常地
71. beyond (prep.) 超過；超出
73. secure (v.) 保護；使安全
74. versatile (adj.) 多才多藝的；多功能的
75. jackpot (n.) 頭獎
76. term (n.) 術語；期間
77. constantly (adv.) 不斷地；持續地
78. appointment (n.) 約會；預約
79. take the raincheck (idiom) 改天；延期
82. stun (v.) 使震驚；使目瞪口呆
84. progress (n./v.) 進步；進展
85. disguise (v./n.) 偽裝
88. instead (adv.) 取代；反而
92. customary (adj.) 習慣的；慣常的
95. aristocrat (n.) 貴族
97. revive (v.) 使復甦
98. represent (v.) 代表
103. standard (n.) 標準
104. lecture (n.) 演講；講座
105. conference (n.) 會議
106. committee (n.) 委員會
107. set up (v.) 建立；設立
108. athlete (n.) 運動員
109. spectator (n.) 觀眾
110. parade (n.) 遊行
111. consequence (n.) 結果；後果
112. discipline (n./v.) 紀律；訓練
113. ideal (adj.) 理想的
116. take place (phr.) 發生；舉行
117. participate (v.) 參與
118. take part in (phr.) 參加；參與
119. freak out (phr.) 崩潰；嚇壞
128. military (adj.) 軍隊
133. startle (v.) 驚嚇；使嚇一跳
134. clinical (adj.) 臨床的
135. mere (adj.) 只是；僅僅
137. implication (n.) 影響；暗示
138. chronic (adj.) 慢性的
139. mental (adj.) 心理的；精神的
140. physical (adj.) 身體的；物理的
144. disorder (n.) 失調；紊亂
145. get rid of (phr.) 擺脫
146. distinguish (v.) 區分；辨別
147. traumatic (adj.) 創傷的
148. actively (adv.) 積極地
149. nearly (adv.) 幾乎
150. relieve (v.) 緩解；減輕
151. scenario (n.) 情節；可能發生的情況
155. volcano (n.) 火山
156. blast (n./v.) 爆炸
157. ash (n.) 灰；火山灰
158. crater (n.) 火山口；坑洞
159. blanket (v.) 覆蓋
160. beforehand (adv.) 事先；預先
162. endeavor (n./v.) 努力；嘗試
163. specify (v.) 明確指出；詳述
164. potential (n./adj.) 潛力；可能性
165. toll (n.) 損害；傷亡人數
166. swell (v.) 腫脹；增大
167. emission (n.) 排放；散發
168. evacuate (v.) 撤離；疏散
169. tragedy (n.) 悲劇；災難
170. seize (v.) 抓住；奪取
172. evident (adj.) 明顯的；清楚的
173. indicate (v.) 表明；指出
174. forecast (v./n.) 預測；預報
175. inspire (v.) 激勵；啟發
176. thriller (n.) 驚悚片；懸疑作品
179. alibi (n.) 不在場證明
180. what if (phr.) 如果…會怎樣
181. league (n.) 聯盟；聯賽
185. on purpose (phr.) 故意地
186. float (v.) 漂浮
187. tendency (n.) 傾向
188. imitate (v.) 模仿
189. intriguing (adj.) 引人入勝的
190. observant (adj.) 善於觀察的
191. mysterious (adj.) 神秘的
192. similarity (n.) 相似；類似
193. personalize (v.) 個人化；客製化
195. contrast (n./v.) 對比；差異
197. recurrence (n.) 再發；復發
198. plague (n./v.) 瘟疫；使困擾
199. sweep (v.) 橫掃；席捲
202. wipe out (v.) 消滅；徹底摧毀
203. other than (phr.) 除了…之外
204. physician (n.) 醫師
205. costume (n.) 服裝；戲服
206. sinister (adj.) 不祥的；邪惡的
207. overtone (n.) 弦外之音；暗示
208. outbreak (n.) 爆發
209. grip (v./n.) 緊抓；掌控
210. epidemic (n.) 流行病
211. prescribe (v.) 開處方
212. potion (n.) 藥水
213. restorative (adj./n.) 有恢復作用的
214. endless (adj.) 無止盡的
215. rarely (adv.) 很少地
216. awful (adj.) 可怕的；糟糕的
219. swollen (adj.) 腫脹的
220. symptom (n.) 症狀
221. principle (n.) 原則
222. perfume (n.) 香水
223. examine (v.) 檢查；檢驗
224. in particular (phr.) 尤其；特別
225. sufficient (adj.) 足夠的
227. countless (adj.) 無數的
229. limb (n.) 肢體；四肢
230. lethal (adj.) 致命的
232. varying (adj.) 多變的；不一樣的
240. referee (n.) 裁判
241. discipline (n./v.) 紀律；訓練
242. advocate (v./n.) 提倡；擁護者
245. premier (adj.) 最重要的；首要的
246. convince (v.) 說服；使信服
247. forward (n./adv.) 前鋒；向前的
249. rush (v./n.) 衝；急忙
252. interrupt (v.) 打斷；中斷
254. correct (adj./v.) 正確的；改正
255. direction (n.) 方向；指示
256. relieve (v.) 緩解；減輕
258. judge (n./v.) 法官；評判
260. fair (adj.) 公平的；美好的
261. launch (v.) 發表；發射；啟動
263. clarify (v.) 釐清；澄清
265. opponent (n.) 對手；反對者
267. conservative (adj.) 保守的
268. neutral (adj.) 中立的
269. engineering (n.) 工程學
270. marvel (v./n.) 驚嘆；令人驚奇的事物
271. nuclear (adj.) 核能的
274. owing to (phr.) 由於；因為
275. compound (n./adj.) 化合物；複合的
276. organic (adj.) 有機的
277. trace (n./v.) 微量；追蹤
278. conclusive (adj.) 決定性的；確鑿的
280. molecules (n.) 分子
281. sniff (v./n.) 嗅；吸氣
283. unless (conj.) 除非
284. origin (n.) 起源；來源
285. chemical (adj./n.) 化學的；化學物質
286. exclude (v.) 排除；不包括
287. firm (n./adj.) 堅定的
291. brochure (n.) 小冊子
292. encyclopedia (n.) 百科全書
293. current (adj./n.) 目前的；水流

### 第二回 (1-5 冊)
1. wharf (n.) 碼頭
2. quality (n.) 品質；特質
3. prolong (v.) 延長
4. unnecessary (adj.) 不必要的
5. cozy (adj.) 舒適的；溫馨的
6. naïve (adj.) 天真的；單純的
7. essentially (adv.) 基本上；本質上
8. politically (adv.) 政治上地
9. spiritually (adv.) 心靈上地；精神上地
10. technically (adv.) 技術上地；嚴格來說
11. apply for (phr.) 申請
12. commitment (n.) 承諾；投入
13. at the sight of (phr.) 一看到…
14. faint (v./adj.) 昏倒；微弱的
15. resign (v.) 辭職
16. grieve (v.) 悲傷；哀悼
17. ethics (n.) 倫理；道德準則
18. third-party (adj.) 第三方的
19. violate (v.) 違反；侵犯
20. discipline (n./v.) 紀律；訓練
21. furnish (v.) 配備；供應
22. construction (n.) 建築；施工
23. highway (n.) 公路；高速公路
24. official (adj./n.) 官方的；官員
25. bribe (n./v.) 賄賂
26. feast (n./v.) 盛宴
27. panel (n.) 專家小組；板子
28. halt (v./n.) 停止
29. nursery (n.) 托兒所
30. flee (v.) 逃跑；逃離
31. civil war (n.) 內戰
32. breakout (n.) 爆發
33. refugee (n.) 難民
34. immigrant (n.) 移民
35. pedestrian (n.) 行人
36. diplomat (n.) 外交官
37. ankle (n.) 腳踝
38. resemble (v.) 像；與…相似
39. invade (v.) 入侵
40. sincere (adj.) 真誠的
41. utterly (adv.) 完全地；徹底地
42. consequently (adv.) 因此；結果
43. public hearing (n.) 公聽會
44. power plant (n.) 發電廠
45. and the like (phr.) 以及類似的事物
46. shortcoming (n.) 缺點；短處
47. framework (n.) 框架；架構
48. commonplace (n./adj.) 司空見慣的事；平凡的
49. demanding (adj.) 嚴格的；要求高的
50. conceal (v.) 隱藏；掩蓋
51. manufacture (v./n.) 製造；生產
52. substitute (v./n.) 代替；替代品
53. existing (adj.) 現存的；現有的
54. cognitive (adj.) 認知的
55. clue (n.) 線索；提示
56. detect (v.) 偵測；察覺
57. inactive (adj.) 不活躍的
58. physical (adj.) 身體的；物理的
59. blink (v./n.) 眨眼；閃爍
60. reduce (v.) 減少
61. pattern (n.) 模式；圖案
62. deceptively (adv.) 欺騙地；看似…地
63. liar (n.) 說謊者
64. freeze (v.) 凍結；停止
65. obscure (adj./v.) 模糊的；使模糊
66. pose (v.) 擺姿勢；提出
67. evidence (n.) 證據
68. adopt (v.) 採用；收養
69. impersonal (adj.) 客觀的；非個人的
70. distance (n./v.) 距離；疏遠
71. completely (adv.) 完全地
72. seek (v.) 尋求；追求
73. suspect (v./n.) 懷疑；嫌疑犯
74. simultaneously (adv.) 同時地
75. monitor (v./n.) 監控；螢幕
76. linguistic (adj.) 語言的
77. feature (n.) 特徵；特色
78. intentionally (adv.) 有意地
79. logical (adj.) 合邏輯的
80. vertical (adj.) 垂直的
81. satisfactory (adj.) 令人滿意的
82. contrary (adj.) 相反的；反對的
83. frequency (n.) 頻率
84. deficiency (n.) 缺乏；不足
85. currency (n.) 貨幣；通用性
86. fluency (n.) 流利；流暢
87. provoke (v.) 激起；挑釁
88. curiosity (n.) 好奇心
89. extra (adj./n.) 額外的
90. promote (v.) 促進；推廣
91. above all (phr.) 尤其；最重要的是
92. copyright (n.) 版權
93. fictional (adj.) 虛構的
94. director (n.) 導演；主管
95. assistant (n.) 助理
96. plot (n./v.) 情節；陰謀
97. enneagram (n.) 九型人格
98. initial (adj.) 最初的
99. embed (v.) 嵌入；插入
100. be supposed to (phr.) 應該
101. appear (v.) 出現；看起來
102. pleasure (n.) 愉快；樂趣
103. reason (n.) 理由；原因
104. publish (v.) 出版；發表
105. competitor (n.) 競爭者
106. typical (adj.) 典型的
107. strategy (n.) 策略；計畫
108. grocery (n.) 雜貨店
109. sue (v.) 控告；起訴
110. violation (n.) 違反；侵犯
111. accusation (n.) 指控；控訴
112. court (n./v.) 法院；追求
113. search (v./n.) 搜尋；搜索
114. defense (n./v.) 防禦；辯護
115. in charge of (phr.) 負責…
116. range from (phr.) 範圍從...（修正原稿 ranch）
117. stem from (phr.) 起源於；由…造成
118. venture (n./v.) 冒險；企業
119. curb (v./n.) 控制；路邊
120. gulp (v./n.) 大口吞；吞嚥
121. escort (v./n.) 護送；陪同
122. spur (v./n.) 激勵；馬刺
123. resolve (v./n.) 解決；決心
124. tolerate (v.) 容忍；忍受
125. slightly (adv.) 輕微地
126. more than (phr.) 超過；不僅
127. debut (n./v.) 首次登場
128. cigarette (n.) 香菸
129. tobacco (n.) 菸草
130. teenager (n.) 青少年
131. alternative (adj./n.) 替代的；選擇
132. vape (v./n.) 電子菸
133. factor (n.) 因素
134. account for (phr.) 解釋；占比
135. combination (n.) 結合；組合
136. device (n.) 裝置；設備
137. flavor (n.) 口味；味道
138. to list just a few (phr.) 僅舉幾例
139. tend to (phr.) 傾向於
140. regulation (n.) 規定；管理
141. unaware of (phr.) 未意識到；不知道
142. regrettable (adj.) 可惜的；令人遺憾的
143. absence (n.) 缺席；缺乏
144. arguably (adv.) 可論證地；可說
145. surpassing (adj.) 卓越的；超越的
146. herd (n./v.) 群；放牧
147. mistakenly (adv.) 錯誤地
148. overlook (v.) 忽略；俯瞰
149. resist (v.) 抵抗；抗拒
150. skyrocket (v./n.) 暴漲；急速上升
151. obesity (n.) 肥胖
152. income (n.) 收入
153. urban (adj.) 城市的
154. adequately (adv.) 適當地
155. nourish (v.) 滋養；培養
156. infanthood (n.) 嬰兒期
157. be exposed to (phr.) 接觸到；暴露於
158. nutritional (adj.) 營養的
159. behavior (n.) 行為；舉止
160. aspect (n.) 方面；層面
161. diet (n./v.) 飲食；節食
162. regular (adj.) 規律的；定期的
163. grand (adj.) 宏偉的；盛大的
164. intake (n.) 攝取量；進口
165. adhere (v.) 黏附；堅持
166. guideline (n.) 指導方針
167. complication (n.) 併發症；複雜情況
168. community (n.) 社區；群體
169. surround (v.) 圍繞；包圍
170. healthcare (n.) 醫療保健
171. behave (v.) 表現；舉止
172. gene (n.) 基因
173. identify (v.) 識別；認出
174. route (n.) 路線；途徑
175. respond (v.) 回應；反應
176. calorie (n.) 卡路里
177. engage in (phr.) 從事；參與
178. moderate (adj./v.) 適度的；調節
179. intense (adj.) 強烈的；緊張的

---

### 第三回 (1-5 冊)
1. implement (v.) 實施；執行
2. expansion (n.) 擴張；膨脹
3. reluctant (adj.) 不情願的；勉強的
4. imaginary (adj.) 想像的；虛構的
5. ambitious (adj.) 有野心的；雄心勃勃的
6. miserable (adj.) 悲慘的；痛苦的
7. voluntarily (adv.) 自願地
8. moderately (adv.) 適度地；中等地
9. mechanically (adv.) 機械地；呆板地
10. issue (n./v.) 議題；發行
11. be regarded as (phr.) 被視為
12. innate (adj.) 天生的；固有的
13. sixth sense (n.) 第六感
14. optimism (n.) 樂觀；樂觀態度
15. maintenance (n.) 維護；保養
16. intuition (n.) 直覺；直覺力
17. comprehension (n.) 理解；領悟
18. phobia (n.) 恐懼症；畏懼
19. refer to (phr.) 提到；參考
20. coined (v.) 創造(詞語)；杜撰
21. come (v.) 來；到達
22. acquire (v.) 獲得；取得
23. amount (n./v.) 數量；總額
24. archer (n.) 弓箭手
25. metal (n.) 金屬
26. vivid (adj.) 生動的；鮮明的
27. ultimate (adj.) 最終的；極限的
28. spacious (adj.) 寬敞的
29. brutal (adj.) 殘酷的；野蠻的
30. critics (n.) 評論家；批評者
31. outdate (v.) 過時；淘汰
32. stereotypical (adj.) 刻板的；老套的
33. gender (n.) 性別；性
34. equality (n.) 平等；均等
35. shrink (v.) 縮小；退縮
36. transport (v./n.) 運輸；運送
37. confine (v.) 限制；監禁
38. strip (v./n.) 剝除；脫衣
39. even if (phr.) 即使
40. disapprove (v.) 不贊成；反對
41. dramatic (adj.) 戲劇性的；引人注目的
42. diligent (adj.) 勤勉的；用功的
43. courteous (adj.) 有禮貌的；謙恭的
44. clumsy (adj.) 笨拙的；拙劣的
45. protest (v./n.) 抗議；反對
46. threatened (adj.) 受威脅的
47. file (n./v.) 檔案；排成行
48. lawsuit (n.) 訴訟；起訴
49. mob (n.) 暴民；烏合之眾
50. none (pron.) 無人；沒有一個
51. victim (n.) 受害者
52. author (n.) 作者；作家
53. guidance (n.) 指導；引導
54. appreciation (n.) 欣賞；感謝
55. consideration (n.) 考慮；體貼
56. preservation (n.) 保存；維護
57. symptom (n.) 症狀；徵兆
58. infection (n.) 感染
59. antibiotics (n.) 抗生素
60. speculate (v.) 推測；投機
61. assassinate (v.) 暗殺；行刺
62. manifest (v./adj.) 顯示；表明
63. compromise (n./v.) 妥協；折衷
64. dim (adj./v.) 昏暗的；模糊的
65. picturesque (adj.) 如畫的；生動的
66. medieval (adj.) 中世紀的
67. magnetic (adj.) 有磁性的；有吸引力的
68. situated (v./adj.) 位於；座落於
69. boast (v.) 自誇；擁有
70. gothic (adj.) 哥德式的
71. exhibition (n.) 展覽；表現
72. designate (v.) 指定；任命
73. ascend (v.) 上升；攀登
74. wind (n./v.) 風；蜿蜒
75. staircase (n.) 樓梯
76. magnificent (adj.) 宏偉的；壯麗的
77. intimate (adj.) 親密的；密切的
78. begun (v.) 開始；著手
79. political (adj.) 政治的
80. correctness (n.) 正確性；恰當性
81. bully (v./n.) 霸凌；欺負
82. religion (n.) 宗教；信仰
83. teeth (n.) 牙齒
84. frontier (n.) 邊界；邊境
85. discrimination (n.) 歧視；區別待遇
86. anti (prefix/adj.) 反…；抗…
87. ancient (adj.) 古老的；古代的
88. prejudice (n./v.) 偏見；歧視
89. associate (v./n.) 聯想；夥伴
90. aggressive (adj.) 侵略性的；好鬥的
91. negative (adj.) 消極的；負面的
92. expert (n./adj.) 專家；熟練的
93. confident (adj.) 自信的
94. address (n./v.) 地址；演講；處理
95. expend (v.) 花費；消耗
96. definition (n.) 定義；說明
97. encourage (v.) 鼓勵；促進
98. identity (n.) 身份；特性
99. theme (n.) 主題；題目
100. deserve (v.) 應得；值得
101. tolerance (n.) 容忍；忍耐
102. sympathy (n.) 同情；慰問
103. meanwhile (adv.) 同時；其間
104. nevertheless (adv.) 然而；不過
105. furthermore (adv.) 此外；而且
106. hence (adv.) 因此；由此
107. for the sake of (phr.) 為了…的緣故
108. at the mercy of (phr.) 任由…擺布
109. on behalf of (phr.) 代表…
110. in preference to (phr.) 優先於
111. opponent (n.) 對手；反對者
112. counterpart (n.) 對應物；相應的人或物
113. convince (v.) 說服；使信服
114. embrace (v.) 擁抱；接受
115. fulfill (v.) 履行；實現
116. install (v.) 安裝；設置
117. lushly (adv.) 茂盛地；豐富地
118. vine (n.) 藤蔓；葡萄藤
119. barren (adj.) 貧瘠的；不孕的
120. bleak (adj.) 荒涼的；黯淡的
121. degree (n.) 程度；學位
122. career (n.) 職業；生涯
123. fanatic (n./adj.) 狂熱者；盲信者
124. owner (n.) 擁有者；物主
125. landscape (n.) 風景；景觀
126. lease (n./v.) 租約；租賃
127. acre (n.) 英畝
128. pine (n.) 松樹
129. bamboo (n.) 竹子
130. delightly (adv.) 高興地；愉快地
131. extraordinary (adj.) 非凡的；特別的
132. brief (adj./n.) 簡短的；摘要
133. exotic (adj.) 異國的；外來的
134. fascinate (v.) 使著迷；吸引
135. privilege (n.) 特權；優待
136. shade (n./v.) 陰影；遮蔽
137. grace (n./v.) 優雅；恩典
138. leapt (v.) 跳躍；激增
139. transformation (n.) 轉變；改變
140. figure (n./v.) 數字；人物；計算
141. advance (v./n.) 前進；提升
142. optional (adj.) 可選擇的；非必需的
143. responsible (adj.) 負責的；有責任的
144. competent (adj.) 有能力的；勝任的
145. contract (n./v.) 合約；縮小
146. deadly (adj.) 致命的；非常的
147. vaccine (n.) 疫苗
148. license (n.) 許可證；執照
149. struggle (v./n.) 掙扎；努力
150. epidemic (n./adj.) 流行病；流行的
151. arise (v.) 出現；產生
152. conduct (n./v.) 行為；實施
153. vintage (adj./n.) 經典的；古典的
154. immunity (n.) 免疫力；豁免
155. vaccination (n.) 疫苗接種
156. mandatory (adj.) 強制的；命令的
157. co-operate (v.) 合作；協作
158. strive (v.) 努力；奮鬥
159. nearly (adv.) 幾乎；差不多
160. partially (adv.) 部分地
161. unrest (n.) 動亂；不安
162. previous (adj.) 先前的；以前的
163. prove (v.) 證明；驗證

### 第四回 (1-5冊)
1. ancient (adj.) 古老的
2. democratic (adj.) 民主的
3. target (n./v.) 目標；以…為目標
4. cradle (n.) 搖籃; 發源地
5. milestone (n.) 里程碑
6. sober (adj.) 清醒的；冷靜的
7. highlight (v./n.) 強調；亮點
8. majestic (adj.) 宏偉的
9. vigorous (adj.) 有活力的
10. noticeable (adj.) 明顯的
11. claim (v./n.) 聲稱；要求
12. convention (n.) 大會；慣例
13. insurance (n.) 保險
14. ownership (n.) 所有權
15. surround (v.) 圍繞
16. balloon (n.) 氣球
17. scoop (n./v.) 勺子；舀
18. flip (v.) 翻轉
19. chirp (v./n.) 鳥叫；啁啾
20. generation (n.) 世代
21. construction (n.) 建造
22. casual (adj.) 隨便的；休閒的
23. durable (adj.) 耐用的
24. manual (adj.) 手動的
25. violent (adj.) 暴力的
26. stumble (v.) 絆倒
27. graze (v./n.) 擦傷；放牧
28. navigate (v.) 導航
29. dwell (v.) 居住
30. angle (n.) 角度
31. margin (n.) 邊緣；利潤
32. exception (n.) 例外
33. limitation (n.) 限制
34. stretch (v./n.) 伸展
35. constitution (n.) 憲法
36. objection (n.) 反對
37. sculpture (n.) 雕刻、雕像
38. adventure (n.) 冒險
39. apply (v.) 申請；塗抹
40. lotion (n.) 乳液
41. alert (adj./v.) 警覺的；提醒
42. itchy (adj.) 發癢的
43. steady (adj.) 穩定的
44. flexible (adj.) 有彈性的；靈活的
45. broaden (v.) 拓寬
46. loosen (v.) 放鬆；鬆開
47. urban (adj.) 城市的
48. transportation (n.) 交通運輸
49. available (adj.) 可獲得的
50. roam (v.) 漫遊
51. orchard (n.) 果園
52. spectacular (adj.) 壯觀的
53. ideal (adj.) 理想的
54. fantastic (adj.) 極好的
55. formally (adv.) 正式地
56. densely (adv.) 密集地
57. loosely (adv.) 鬆散地
58. latterly (adv.) 最近；後期
59. prosperous (adj.) 繁榮的
60. alternate (adj./v.) 交替的；輪流
61. flawless (adj.) 完美無瑕的
62. remote (adj.) 遙遠的；偏遠的
63. whether or not (conj.) 是否
64. for fear that (conj.) 以免
65. as long as (conj.) 只要
66. owing to (prep.) 由於
67. in contrast to (prep.) 與…相反
68. relevant to (adj.) 與…相關
69. in spite of (prep.) 儘管
70. board (n./v.) 板子；登上（交通工具）
71. market (n./v.) 市場；行銷
72. alphabet (n.) 字母表
73. upper (adj.) 上方的
74. device (n.) 裝置
75. supposedly (adv.) 據說
76. briefly (adv.) 簡短地
77. certain (adj.) 某些；確定的
78. prediction (n.) 預測
79. original (adj.) 原始的；原創的
80. refer to as (v.) 稱作
81. associate (v.) 聯想；結交
82. devil (n.) 魔鬼
83. demonstrate (v.) 示範；證明
84. lack (v./n.) 缺乏
85. education (n.) 教育
86. common sense (n.) 常識
87. maintain (v.) 維持
88. regulate (v.) 管理；調節
89. alter (v.) 改變
90. postpone (v.) 延期
91. seize (v.) 抓住；奪取
92. far from (prep.) 遠離；完全不是
93. on account of (prep.) 因為
94. in consequence of (prep.) 因…的結果
95. collapse (v./n.) 崩塌
96. consult (v.) 諮詢
97. prosper (v.) 繁榮
98. recite (v.) 背誦
99. mock (v./adj.) 嘲笑；模擬的
100. sparkle (v.) 閃耀
101. peer (v./n.) 凝視；同儕
102. twist (v./n.) 扭曲
103. minimum (n./adj.) 最小值；最小的
104. publish (v.) 出版
105. on the loose (phr.) 四處遊蕩；失控
106. solid (adj.) 固體的；堅固的
107. genetic (adj.) 基因的
108. primitive (adj.) 原始的
109. ape (n.) 猿
110. average (adj./n.) 平均的；平均
111. beast (n.) 野獸
112. region (n.) 地區
113. deserve (v.) 應得
114. normal (adj.) 正常的
115. defend (v.) 防禦
116. community (n.) 社區
117. evidence (n.) 證據
118. exist (v.) 存在
119. multiple (adj.) 多重的
120. vision (n.) 視力；願景
121. fake (adj./n.) 假的；假貨
122. confuse (v.) 使困惑
123. freak (n./adj.) 怪人；反常的
124. arouse (v.) 激起
125. conference (n.) 會議
126. establish (v.) 建立
127. experiment (n./v.) 實驗
128. frequency (n.) 頻率
129. publication (n.) 出版物
130. compose (v.) 組成；作曲
131. material (n.) 材料
132. finalize (v.) 完成定稿
133. be intended to (phr.) 旨在
134. remain (v.) 保持；剩下
135. field (n.) 領域
136. affect (v.) 影響
137. decade (n.) 十年
138. participant (n.) 參與者
139. gather (v.) 收集；聚集
140. standard (n./adj.) 標準
141. temporary (adj.) 暫時的
142. interrupt (v.) 打斷
143. upset (v./adj.) 使心煩；難過的
144. a series of (phr.) 一連串
145. title (n.) 標題
146. as well as (phr.) 以及
147. a set of (phr.) 一套
148. accompany (v.) 陪伴
149. selection (n.) 選擇
150. vocabulary (n.) 字彙
151. rely on (v.) 依靠
152. anniversary (n.) 週年紀念
153. update (v./n.) 更新
154. version (n.) 版本
155. greet (v.) 問候
156. commonplace (adj./n.) 普遍的；尋常事物
157. aware (adj.) 意識到的
158. unique (adj.) 獨特的
159. prevent (v.) 預防
160. error (n.) 錯誤
161. familiar (adj.) 熟悉的
162. handshake (n.) 握手
163. prefer (v.) 偏好
164. perform (v.) 表演；執行
165. press (v.) 按壓
166. pray (v.) 祈禱
167. slight (adj.) 輕微的
168. bow (v./n.) 鞠躬；弓
169. identical (adj.) 完全相同的
170. adoration (n.) 崇拜
171. gesture (n./v.) 手勢；比手勢
172. greeter (n.) 接待員
173. involve (v.) 涉及
174. physical (adj.) 身體的；物理的
175. clap (v.) 拍手
176. stick out (v.) 伸出；突出
177. foreign (adj.) 外國的
178. basics (n.) 基本知識
179. offensive (adj.) 冒犯的
180. disaster (n.) 災難
181. gain (v./n.) 獲得
182. severity (n.) 嚴重性
183. relatively (adv.) 相對地
184. hurricane (n.) 颶風
185. tornado (n.) 龍捲風
186. landslide (n.) 山崩
187. flood (n./v.) 洪水；淹沒
188. drought (n.) 乾旱
189. proof (n.) 證據
190. priority (n.) 優先事項
191. issue (n./v.) 問題；發布
192. occur (v.) 發生
193. vital (adj.) 重要的
194. adequate (adj.) 充足的
195. canned (adj.) 罐頭的
196. freezer (n.) 冷凍庫
197. essential (adj./n.) 必要的；必需品
198. outrage (n./v.) 暴行；激怒
199. maintain (v.) 維持
200. initial (adj.) 最初的
201. urgent (adj.) 緊急的
202. supply (n./v.) 補給；供應
203. on-site (adj./adv.) 現場的；在現場
204. electricity (n.) 電力
205. blessing (n.) 祝福
206. prove (v.) 證明
207. blanket (n.) 毯子
208. battery (n.) 電池
209. first aid (n.) 急救
210. assist (v.) 協助
211. property (n.) 財產
212. strike (v./n.) 罷工；擊打
213. bond (n./v.) 連結；建立關係
214. resident (n.) 居民
215. primary (adj.) 主要的
216. fail to (v.) 未能
217. outline (v./n.) 概述；大綱
218. survive (v.) 生存
219. aftermath (n.) 後果
220. item (n.) 項目
221. respond (v.) 回應
222. shelter (n./v.) 庇護；避難
223. relieve (v.) 緩和
224. compete (v.) 競爭
225. prominent (adj.) 顯著的
226. fierce (adj.) 激烈的
227. competitor (n.) 競爭者
228. debate (n./v.) 辯論
229. immigrant (n.) 移民
230. exception (n.) 例外
231. layer (n.) 層
232. source (n.) 來源
233. top (v.) 蓋在上面
234. serving (n.) 一份（食物）
235. triangular (adj.) 三角形的
236. grab (v.) 抓取
237. on the run (phr.) 逃亡中；奔波中
238. varied (adj.) 多樣化的
239. square (n./adj.) 正方形；平方的
240. consume (v.) 消耗
241. defend (v.) 防禦
242. worth (adj./n./prep.) 值得；價值
243. operation (n.) 手術；運作
244. program (n.) 節目；程序
245. assistance (n.) 協助
246. purchase (v./n.) 購買
247. companion (n.) 夥伴
248. organic (adj.) 有機的
249. entire (adj.) 整體的
250. state (n./v.) 狀態；陳述
251. import (v./n.) 進口
252. harvest (v./n.) 收成
253. quality (n./adj.) 品質；高品質的
254. retire (v.) 退休
255. capable of (adj.) 有能力的
256. chore (n.) 雜務
257. sew (v.) 縫紉
258. repair (v.) 修理
259. dedicated to (adj.) 致力於…的
260. schedule (n./v.) 時程；安排
261. independence (n.) 獨立
262. beneficial (adj.) 有益的

### 第五回 (1-5 冊)
1. ignore (v.) 忽略
2. whistle (v./n.) 口哨；吹口哨
3. whisper (v./n.) 低語；耳語
4. hesitate (v.) 猶豫
5. venture (v./n.) 冒險
6. considerably (adv.) 相當大地
7. improve (v.) 改善
8. academic (adj.) 學術的
9. apply (v.) 申請；應用
10. content (n.) 內容
11. assistance (n.) 協助
12. strategy (n.) 策略
13. element (n.) 要素
14. definition (n.) 定義
15. basic (adj.) 基本的
16. essential (adj.) 必要的；重要的
17. characteristic (n.) 特徵
18. freedom (n.) 自由
19. journalism (n.) 新聞業
20. temporary (adj.) 暫時的
21. democratic (adj.) 民主的
22. appropriate (adj.) 適當的
23. reasonable (adj.) 合理的
24. pandemic (n./adj.) 大流行
25. race (n.) 種族；比賽
26. awareness (n.) 意識
27. preventive (adj.) 預防的
28. diploma (n.) 文憑
29. campaign (n.) 活動；運動
30. measure (v./n.) 措施；測量
31. procedure (n.) 程序
32. relief supply (n.) 救援物資
33. charity (n.) 慈善
34. rapidly (adv.) 迅速地
35. victim (n.) 受害者
36. expose (v.) 使暴露；揭露
37. distribute (v.) 分配；分發
38. attach (v.) 附加；貼上
39. sprinkle (v.) 灑
40. district (n.) 區域
41. retirement (n.) 退休
42. pace (n.) 步伐；速度
43. atmosphere (n.) 氣氛；大氣
44. rural (adj.) 鄉村的
45. urban (adj.) 城市的
46. secure (v./adj.) 保護；使安全
47. idle (adj.) 閒散的；無所事事的
48. informative (adj.) 資訊豐富的
49. primitive (adj.) 原始的
50. spiritual (adj.) 心靈的；精神的
51. fundamental (adj.) 基礎的；根本的
52. rescue (v./n.) 救援
53. crew (n.) 全體工作人員
54. at the scene (phr.) 在現場
55. speed (v./n.) 速度；加速
56. literally (adv.) 照字面地；確實
57. miserably (adv.) 悲慘地
58. promptly (adv.) 立即地
59. gracefully (adv.) 優雅地
60. colleague (n.) 同事
61. announce (v.) 宣布
62. species (n.) 物種
63. astonish (v.) 使驚訝
64. condemn (v.) 譴責
65. diminish (v.) 減少
66. utilize (v.) 利用
67. monument (n.) 紀念碑
68. remind (v.) 提醒
69. resident (n.) 居民
70. glorious (adj.) 光榮的
71. implication (n.) 含意
72. ceremony (n.) 典禮
73. liability (n.) 責任；負債
74. heritage (n.) 遺產；文化傳承
75. pitcher (n.) 投手
76. take in (phr.) 吸收；理解
77. nutrient (n.) 養分；營養物
78. organism (n.) 生物
79. structure (n.) 結構
80. insect (n.) 昆蟲
81. capture (v.) 捕捉
82. escape (v.) 逃脫
83. trap (n./v.) 陷阱；困住
84. contain (v.) 含有；容納
85. chemical (n./adj.) 化學物質
86. consume (v.) 消耗；吃
87. picky (adj.) 挑剔的
88. evolution (n.) 進化
89. develop (v.) 發展
90. feature (n./v.) 特徵；以…為特色
91. obtain (v.) 獲得
92. sufficient (adj.) 足夠的
93. soil (n.) 土壤
94. acquire (v.) 獲得；習得
95. beware (v.) 小心；當心
96. indulge (v.) 沈溺；縱容
97. rather than (prep./conj.) 而不是
98. as well as (prep.) 以及
99. regardless of (prep.) 不管；不顧
100. diversify (v.) 多樣化
101. owing to (prep.) 由於
102. eventually (adv.) 最終；終於
103. supposedly (adv.) 據說
104. stem from (v.) 源自；起因於
105. attend to (phr.) 處理; 照顧
106. take the toll on (phr.) 對…造成傷害
107. popularity (n.) 人氣；受歡迎程度
108. remarkable (adj.) 非凡的；顯著的
109. phenomenon (n.) 現象
110. statistics (n.) 統計資料
111. boom (n./v.) 繁榮；激增
112. annual (adj.) 每年的
113. income (n.) 收入
114. billion (n.) 十億
115. platform (n.) 平台
116. individual (n.) 個人
117. upload (v.) 上傳
118. viewer (n.) 觀眾
119. allow (v.) 允許
120. rating (n.) 評價；評分
121. comment (n./v.) 留言；評論
122. private (adj.) 私人的
123. material (n.) 資料；素材
124. corporation (n.) 公司；企業
125. content (n.) 內容
126. steady (adj.) 穩定的
127. stream (n./v.) 流；串流
128. channel (n.) 頻道
129. cooperate (v.) 合作
130. advertiser (n.) 廣告商
131. receive (v.) 收到；接收
132. viewership (n.) 收視率；觀看量
133. creative (adj.) 有創意的
134. affordable (adj.) 負擔得起的
135. beneficial (adj.) 有益的
136. recognizable (adj.) 可辨認的
137. essential (adj.) 必要的；基本的
138. reflect on (phr.) 反思；思考
139. abound with (phr.) 充滿；富含
140. devote oneself to (phr.) 致力於
141. take part in (phr.) 參加
142. constantly (adv.) 不斷地
143. enormously (adv.) 極大地
144. universally (adv.) 普遍地
145. permanently (adv.) 永久地
146. identity (n.) 身份
147. occupation (n.) 職業
148. interference (n.) 干擾
149. alternative (n./adj.) 替代方案；替代的
150. construction (n.) 建造；建設
151. far from (phr.) 遠非；一點也不
152. neglect (v.) 忽視
153. employee (n.) 員工
154. consist of (phr.) 由…組成
155. abandon (v.) 放棄；遺棄
156. remote (adj.) 遙遠的；偏僻的
157. tourist (n.) 旅客；觀光客
158. mystery (n.) 神秘；謎
159. located (adj.) 位於
160. take place (phr.) 發生
161. primary (adj.) 主要的；初級的
162. outlying (adj.) 偏遠的
163. state (n./v.) 州；國家；聲明
164. entire (adj.) 全部的
165. complex (adj.) 複雜的 / (n.) 建築群
166. destination (n.) 目的地
167. component (n.) 組成部分
168. industry (n.) 產業
169. generate (v.) 產生；創造
170. vital (adj.) 重要的；必需的
171. revenue (n.) 收入；收益
172. regarding (prep.) 關於
173. splash (n./v.) 濺起；水花
174. pregnant (adj.) 懷孕的
175. buddha (n.) 佛陀
176. statue (n.) 雕像
177. elder (n.) 長者
178. pour (v.) 倒；灑
179. common sense (n.) 常識
180. central (adj.) 中心的；主要的
181. current (adj./n.) 當前的；流動的
182. contrast (n./v.) 對比；差異
183. unofficially (adv.) 非正式地
184. pure (adj.) 純粹的
185. observe (v.) 觀察；遵守
186. foreigner (n.) 外國人
187. gather (v.) 聚集
188. throughout (prep./adv.) 遍及；全程
189. oriented (adj.) 以…為導向的
190. sprinkle (v.) 灑；噴灑
191. participant (n.) 參加者
192. few (adj./pron.) 很少；幾乎沒有
193. avoid (v.) 避免
194. soak (v.) 浸泡
195. remove (v.) 移除；去掉
196. valuable (adj.) 有價值的
197. passport (n.) 護照
198. document (n.) 文件
199. waterproof (adj.) 防水的
200. otherwise (adv.) 否則
201. patience (n.) 耐心

### 第六回 (1-5 冊 111 全模)
1. label (v./n.) 貼標籤；標籤
2. behavior (n.) 行為
3. attitude (n.) 態度
4. contract (n.) 合約；(v.) 收縮
5. resolute (adj.) 堅決的
6. crucial (adj.) 關鍵的
7. lousy (adj.) 很差的；糟糕的
8. crown (v./n.) 加冕；皇冠
9. compose (v.) 組成；作曲
10. accent (n.) 口音; 腔調
11. dialect (n.) 方言
12. merit (n.) 優點；價值
13. linen (n.) 亞麻布；亞麻製品
14. illusion (n.) 幻覺；錯覺
15. scatter (v.) 分散；撒
16. shrug (v./n.) 聳肩
17. shatter (v.) 粉碎；破碎
18. shiver (v./n.) 發抖
19. physical (adj.) 實體的；身體的
20. contact (n./v.) 接觸；聯繫
21. hygiene (n.) 衛生
22. measurement (n.) 測量；尺寸
23. precaution (n.) 預防措施
24. inspection (n.) 檢查；檢驗
25. estimation (n.) 估計；評估
26. outfit (n.) 全套服裝
27. fragile (adj.) 脆弱的；易碎的
28. dense (adj.) 密集的
29. rigid (adj.) 僵硬的；堅固的
30. elastic (adj.) 有彈性的
31. rumor (n.) 謠言
32. orientation (n.) 傾向
33. dedicate (v.) 奉獻；致力
34. biological (adj.) 生物的；生物學的
35. literal (adj.) 字面上的
36. dominant (adj.) 佔優的；支配的
37. loan (n./v.) 貸款
38. custody (n.) 監護；拘留
39. residence (n.) 住所
40. pose (v.) 造成；擺姿勢
41. commercial (adj.) 商業的；(n.) 廣告
42. resume (v.) 恢復；(n.) 履歷
43. prescribe (v.) 開處方；規定
44. snap (v.) 快速拍照
45. bureau (n.) 局、處、署
46. panic (n./v.) 驚慌
47. modify (v.) 修改
48. approach (v./n.) 接近；方法
49. violate (v.) 違反
50. shortage (n.) 缺乏；短缺
51. aim at (phr.) 以…為目標
52. necessity (n.) 必需品；必要性
53. liberally (adv.) 大量地；自由地
54. gratefully (adv.) 感激地
55. preferably (adv.) 最好；寧可
56. excessively (adv.) 過度地
57. overwhelm (v.) 壓倒；使招架不住
58. misleading (adj.) 誤導的
59. exposed to (phr.) 暴露於
60. differentiate (v.) 區分；分辨
61. prove (v.) 證明
62. ingredient (n.) 成分；材料
63. comprise (v.) 包含；由…組成
64. protein (n.) 蛋白質
65. clarify (v.) 釐清；澄清
66. penetrate (v.) 穿透；滲入
67. let alone (phr.) 更不用說
68. activate (v.) 啟動
69. response (n.) 回應；反應
70. occurrence (n.) 發生事件
71. instantly (adv.) 立即地
72. discard (v.) 丟棄
73. fall for (v.) 上當
74. false (adj.) 錯誤的；假的
75. verify (v.) 驗證
76. cross-check (v.) 交叉核對
77. credible (adj.) 可信的
78. feasible (adj.) 可行的
79. hesitation (n.) 猶豫
80. fundamental (adj.) 基本的；根本的
81. considerable (adj.) 相當大的
82. sufficient (adj.) 足夠的
83. evidence (n.) 證據
84. complex (adj.) 複雜的；(n.) 建築群
85. procedure (n.) 程序
86. eliminate (v.) 消除
87. reinforce (v.) 加強
88. trigger (v./n.) 引發；觸發
89. subtract (v.) 減去
90. cast a shadow over (phr.) 為…蒙上陰影
91. shed light on (phr.) 釐清；揭示
92. keep track of (phr.) 追蹤；掌握
93. hold on to (phr.) 堅持；抓牢
94. on top of that (phr.) 除此之外
95. specific (adj.) 具體的；特定的
96. catastrophic (adj.) 災難性的
97. outbreak (n.) 爆發
98. rapidly (adv.) 迅速地
99. spread (v./n.) 傳播；擴散
100. horrific (adj.) 可怕的
101. symptom (n.) 症狀
102. intense (adj.) 強烈的
103. strengthen (v.) 加強
104. detect (v.) 偵測；察覺
105. suppress (v.) 抑制；壓制
106. found (v.) 創立；建立
107. spark (v.) 引發；激起
108. fuel (v.) 加劇；助長
109. spit (v./n.) 吐出；唾液
110. toll (n.) 損傷；通行費
111. drill (v./n.) 演練；鑽孔
112. namely (adv.) 也就是；即
113. recall (v./n.) 回想；召回
114. destiny (n.) 命運
115. issue (n./v.) 問題；發行
116. alert (adj./n./v.) 警覺的；警報
117. bury (v.) 埋葬
118. trial (n.) 審判；試驗
119. formally (adv.) 正式地
120. dominate (v.) 主導；支配
121. spotlight (n.) 聚光燈；焦點
122. livestream (n./v.) 直播
123. viewership (n.) 收視率；觀看數
124. distribute (v.) 分發；分配
125. unintentionally (adv.) 無意地
126. praise (v./n.) 稱讚
127. attorney (n.) 律師
128. file (v.) 提出（訴訟、申請）；(n.) 檔案
129. court (n.) 法院
130. interrupt (v.) 打斷；中斷
131. accumulate (v.) 累積
132. celebrity (n.) 名人
133. distinguish (v.) 區分；辨別
134. aggressive (adj.) 侵略性的；積極進取的
135. testimony (n.) 證詞
136. persuade (v.) 說服
137. associate (v.) 聯想；和…關聯
138. press release (n.) 新聞稿
139. mobile (adj./n.) 行動的；手機
140. project (n.) 企劃；專案；(v.) 投射
141. seller (n.) 賣家
142. cater to (phr.) 迎合；滿足需求
143. consumer (n.) 消費者
144. refer to (phr.) 參考；指的是
145. financial (adj.) 金融的；財務的
146. via (prep.) 透過；經由
147. merchandise (n.) 商品
148. device (n.) 裝置；設備
149. install (v.) 安裝
150. scan (v.) 掃描
151. tap (v.) 輕觸；點擊（手機）
152. give rise to (phr.) 引起；導致
153. unprecedented (adj.) 前所未有的
154. network (n.) 網路；電視網
155. resident (n.) 居民；住戶
156. digital (adj.) 數位的
157. disaster (n.) 災害；災難
158. acute (adj.) 急性的；劇烈的
159. instead of (prep.) 代替；而不是
160. physical (adj.) 身體的；實體的
161. rapid (adj.) 快速的
162. retailer (n.) 零售商
163. operator (n.) 操作員；業者
164. willing to (phr.) 願意
165. embrace (v.) 接受；擁抱
166. fail to (phr.) 未能；沒做到
167. necessity (n.) 必需品；必要
168. failure (n.) 失敗

### 第七回 (1-5 冊 113 北北基)
1. strict (adj.) 嚴格的
2. misbehave (v.) 行為不端
3. intimidate (v.) 威嚇；恐嚇
4. persuade (v.) 說服
5. console (v.) 安慰
6. trick (n./v.) 欺騙；詭計
7. scam (n./v.) 詐騙
8. enormous (adj.) 巨大的
9. estimate (v./n.) 估計
10. ethical (adj.) 道德的
11. enlightening (adj.) 有啟發性的
12. victim (n.) 受害者
13. relief (n.) 減輕；救濟
14. sympathy (n.) 同情
15. indifference (n.) 漠不關心
16. endurance (n.) 忍耐力
17. hostility (n.) 敵意
18. delay (v./n.) 延遲
19. disrupt (v.) 打亂；中斷
20. endeavor (n./v.) 努力；嘗試
21. accumulation (n.) 累積
22. circumstance (n.) 情況；環境
23. rehearsal (n.) 排練
24. college (n.) 大學
25. application (n.) 申請；應用
26. position (n.) 位置；職位
27. receive (v.) 接收；收到
28. revise (v.) 修訂
29. obtain (v.) 獲得
30. withdraw (v.) 撤回；退出
31. thrill (n./v.) 興奮；激動
32. antigua (n.) 安地瓜島
33. flea (n.) 跳蚤
34. craft (n.) 手藝；工藝
35. delicate (adj.) 精緻的；脆弱的
36. accurate (adj.) 精確的
37. authentic (adj.) 真實的；可靠的
38. relevant (adj.) 相關的
39. comparative (adj.) 比較的
40. promising (adj.) 有前途的
41. despair (n./v.) 絕望
42. contempt (n.) 輕視；蔑視
43. outrage (n.) 憤怒
44. sparkle (v./n.) 閃耀
45. competition (n.) 競爭
46. strategic (adj.) 戰略的
47. allow (v.) 允許
48. championship (n.) 冠軍賽
49. intensive (adj.) 密集的
50. partial (adj.) 部分的；偏袒的
51. tremendous (adj.) 巨大的
52. vigorous (adj.) 精力充沛的
53. access (n./v.) 進入；使用
54. overall (adj./adv.) 總體的
55. eliminate (v.) 消除；排除
56. acquire (v.) 獲得；取得
57. explode (v.) 爆炸；激增
58. speed (n./v.) 速度；加速
59. severe (adj.) 嚴重的；劇烈的
60. recklessly (adv.) 魯莽地
61. cautiously (adv.) 小心地
62. dominantly (adv.) 佔優勢地
63. spontaneously (adv.) 自發地
64. album (n.) 相冊；唱片
65. wig (n.) 假髮
66. feature (v./n.) 特徵；以…為特色
67. privacy (n.) 隱私
68. extra (adj./n.) 額外的
69. to name a few (phr.) 例如
70. inconsistent (adj.) 不一致的
71. remove (v.) 移除；去掉
72. tag (n./v.) 標籤；標記
73. vaguely (adv.) 模糊地
74. praise (v./n.) 讚揚
75. critic (n.) 批評家
76. comment (n./v.) 評論
77. vocal (adj.) 發聲的；直言不諱的
78. melancholy (n./adj.) 憂鬱
79. obsession (n.) 著迷；執念
80. nominate (v.) 提名
81. by all means (phr.) 務必；一定
82. distinct (adj.) 明顯不同的
83. roughly (adv./adj.) 大約；粗糙地
84. get accustomed to (phr.) 習慣於
85. get along with (phr.) 與…相處
86. initially (adv.) 最初
87. suspicious of (phr.) 對…懷疑
88. criticize (v.) 批評
89. compliment (v./n.) 讚美
90. upgrade (v./n.) 升級
91. facilitate (v.) 促進；使容易
92. discourage (v.) 阻止；使氣餒
93. status (n.) 狀態；地位
94. virtual (adj.) 虛擬的
95. currency (n.) 貨幣
96. define (v.) 定義
97. trade (n./v.) 貿易
98. restrict (v.) 限制
99. circulate (v.) 流通；傳播
100. lack (v./n.) 缺乏
101. stability (n.) 穩定
102. dynamic (adj.) 動態的；有活力的
103. transaction (n.) 交易
104. security (n.) 安全；保障
105. fraud (n.) 欺詐；詐騙
108. carbon (n.) 碳
109. footprint (n.) 足跡；影響
110. emission (n.) 排放
111. reliant (adj.) 依賴的
112. authority (n.) 權威；當局
113. a means of (phr.) 一種…的方式
114. via (prep.) 經由；透過
116. insurance (n.) 保險
117. implement (v./n.) 實施；工具
118. utilize (v.) 利用
122. innovation (n.) 創新
126. controversial (adj.) 有爭議的

### 第八回 (1-5冊 111 北模)
1. frequently (adv.) 頻繁地
2. obesity (n.) 肥胖
3. disease (n.) 疾病
4. justify (v.) 證明…正當
5. manifest (v.) 表明；顯示
6. indulge (v.) 放縱；沉迷
7. devote (v.) 奉獻
8. socially (adv.) 社會地
9. unacceptable (adj.) 無法接受的
10. legally (adv.) 合法地
11. criminal (adj.) 犯罪的
12. melancholy (n.) 憂鬱
13. affection (n.) 喜愛；感情
14. correspondence (n.) 通信
15. mischief (n.) 惡作劇；搗蛋
16. infection (n.) 感染
17. steadily (adv.) 穩定地
18. decline (v.) 下降；減少
19. vaccination (n.) 疫苗接種
20. official (adj.) 官方的
21. cautiously (adv.) 謹慎地
22. bolder (adj.) 更大膽的
23. distinguish (v.) 辨別
24. peculiar (adj.) 奇特的
25. faithful (adj.) 忠實的
26. optimistic (adj.) 樂觀的
27. decade (n.) 十年
28. ravage (v.) 蹂躪；破壞
29. tragedy (n.) 悲劇
30. survivor (n.) 倖存者
31. linger (v.) 逗留
32. deposit (n.) 存款；押金
33. abound (v.) 充滿；大量存在
34. rejoice (v.) 歡喜
35. consider (v.) 考慮
36. critical (adj.) 重要的；關鍵的
37. commercial (adj.) 商業的
38. instinct (n.) 本能
39. acclaim (v.) 讚譽
40. discipline (n.) 紀律
41. compromise (v.) 妥協
42. alien (n.) 外星人；外國人
43. apply for (v.) 申請
44. citizenship (n.) 公民身分
45. permanent (adj.) 永久的
46. residency (n.) 居住；住所
47. exclusive (adj.) 獨有的；專屬的
48. competent (adj.) 有能力的
49. destined (adj.) 註定的
50. eligible (adj.) 有資格的
51. multinational (adj.) 跨國的
52. corporation (n.) 公司；企業
53. obtain (v.) 獲得
54. wholesale (adj.) 批發的
55. license (n.) 執照
56. beverage (n.) 飲料
57. escort (v.) 護送
58. distribute (v.) 分發；配送
59. auction (n.) 拍賣
60. scramble (v.) 搶奪；爭奪
61. construction (n.) 建設
62. arena (n.) 場地；競技場
63. capacity (n.) 容量
64. skyscraper (n.) 摩天大樓
65. cluster (n.) 群；簇
66. vacancy (n.) 空位；空缺
67. investigation (n.) 調查
68. parallel (adj.) 平行的
69. striking (adj.) 驚人的
70. ragged (adj.) 破爛的
71. lucrative (adj.) 賺錢的
72. hoarse (adj.) 沙啞的
73. urban (adj.) 都市的
74. leave much to be desired (phr.) 有很大改善空間
75. steeply (adv.) 急遽地
76. frantically (adv.) 瘋狂地；緊張忙亂地
77. bluntly (adv.) 直言不諱地
78. lavishly (adv.) 奢華地
79. improve (v.) 改善
80. production (n.) 生產
81. tropical (adj.) 熱帶的
82. climate (n.) 氣候
83. reproduce (v.) 繁殖
84. hive (n.) 蜂巢
85. calm (a.) 使..冷靜
86. defensive (adj.) 防禦性的
87. alarm (n.) 警報
88. collect (v.) 收集
89. nectar (n.) 花蜜
90. store (v.) 儲存
91. stick (v.) 黏住
92. stuff (v.) 塞滿；填滿
93. starve (v.) 挨餓
94. staff (n.) 職員
95. set off (phr.) 出發；引發
96. go off (phr.) （警報）響起
97. call off (phr.) 取消
98. knock off (phr.) 收工；停止
99. dual (adj.) 雙重的
100. steamy (adj.) 蒸氣瀰漫的
101. crisp (adj.) 酥脆的
102. few (adj.) 很少的
103. chore (n.) 家務
104. pay off (phr.) 得到回報
105. unexpected (adj.) 出乎意料的
106. publish (v.) 發表；出版
107. journal (n.) 期刊；日記
108. instead of (prep.) 而不是
109. prevent (v.) 預防
110. allergy (n.) 過敏
111. conduct (v.) 進行
112. survey (n.) 調查
113. indicate (v.) 指出
114. germ (n.) 細菌
115. explanation (n.) 解釋
116. hygiene (n.) 衛生
117. hypothesis (n.) 假設
118. immune (adj.) 免疫的
119. recognize (v.) 認出；辨識
120. bacteria (n.) 細菌
121. virus (n.) 病毒
122. overreact (v.) 反應過度
123. ordinary (adj.) 普通的
124. stimulate (v.) 刺激
125. prevent from (phr.) 阻止…
126. occur (v.) 發生
127. manually (adv.) 手動地
128. verbally (adv.) 口頭地
129. supposedly (adv.) 據說
130. implicitly (adv.) 含蓄地
131. regardless of (prep.) 不管；無論
132. in return for (phr.) 交換；作為回報
133. be exposed to (phr.) 暴露於
134. tolerate (v.) 容忍
135. undermine (v.) 破壞；削弱
136. graze (v.) 擦傷；放牧
137. clarify (v.) 澄清
138. iron (n.) 鐵
139. overcome (v.) 克服
140. adversity (n.) 逆境
141. distance (v.) 疏遠；拉開距離
142. take charge of (phr.) 負責…
143. career (n.) 職涯
144. remain (v.) 保持；仍然是
145. inspiration (n.) 靈感
146. athlete (n.) 運動員
147. sheer (adj.) 完全的；十足的
148. struck (v.) 打擊；撞擊
149. reputation (n.) 名聲
150. cripple (v.) 使癱瘓；削弱
151. art (n.) 藝術
152. persistence (n.) 堅持
153. distress (n.) 痛苦；困境
154. peak (n.) 頂峰
155. secure (v.) 獲得; 使.. 穩固
156. dreadful (adj.) 可怕的
157. fascinate (v.) 使著迷
158. destination (n.) 目的地
159. legend has it (phr.) 傳說…
160. tribe (n.) 部落
161. heritage (n.) 遺產
162. devastating (adj.) 毀滅性的
163. force (n.) 力量
164. resident (n.) 居民
165. flee (v.) 逃離
166. glory (n.) 光榮
167. centerpiece (n.) 最重要的部分
168. magnificent (adj.) 壯麗的
169. boast (v.) 以…自豪
170. unsurpassed (adj.) 無與倫比的
171. luxury (n.) 奢華
172. overlook (v.) 俯瞰；忽略
173. hectare (n.) 公頃
174. jungle (n.) 叢林
175. adventure (n.) 冒險
176. hub (n.) 中心
177. feature (v.) 以…為特色
178. adrenaline (n.) 腎上腺素
179. induce (v.) 引起
180. sustain (v.) 支撐；維持
181. safari (n.) 野生動物旅行
182. explore (v.) 探索
183. stretch (v.) 延伸
184. assist (v.) 協助
185. splendid (adj.) 壯麗的；極好的
186. unique (adj.) 獨特的
187. device (n.) 裝置
188. by means of (phr.) 藉由
189. mount (v.) 安裝；固定
190. rotate (v.) 旋轉
191. waterwheel (n.) 水車
192. prime (adj.) 主要的
193. replace (v.) 替換
194. source (n.) 來源
195. grind (v.) 研磨
196. grain (n.) 穀物
197. certain (adj.) 某些；確定的
198. drainage (n.) 排水系統
199. pump (n.) 幫浦
200. equally (adv.) 同樣地
201. originates (v.) 起源（於）
202. radiate (v.) 散發；輻射
203. vertical (adj.) 垂直的
204. axis (n.) 軸
205. direct (v.) 指向；引導
206. gear (n.) 齒輪
207. take by the force (phr.) 用力取走
208. instruct (v.) 指示；教導
209. irrigation (n.) 灌溉
210. horizontal (adj.) 水平的
211. angle (n.) 角度
212. attach (v.) 附著；連接
213. wooden (adj.) 木製的
217. house (v.) 容納
218. brick (n.) 磚
219. weatherproof (adj.) 防風雨的
220. decline (v.) 下降
221. the former (phr.) 前者
222. the latter (phr.) 後者
223. operate (v.) 操作
224. be credited to (phr.) 歸功於
225. indispensable (adj.) 不可或缺的
226. spare (v.) 騰出；省下
227. startup (n.) 新創公司
228. measure (v.) 測量
231. virtually (adv.) 幾乎；虛擬地
232. sturdy (adj.) 堅固的
234. substance (n.) 物質
237. odor (n.) 氣味
238. founder (n.) 創辦人
239. portable (adj.) 可攜帶的
240. spot (n.) 地點
241. mobile (adj.) 行動的
242. non-profit (adj.) 非營利的
243. in contrast to (phr.) 與…相反
244. supply (v.) 供應
245. emergency (n.) 緊急情況
246. kit (n.) 裝備組
247. evasion (n.) 逃避
248. script (n.) 劇本
249. review (v.) 評論；檢視
250. benefit (n.) 益處
251. outfit (n.) 裝備；套裝
252. rescue (v.) 救援
253. in handy (phr.) 派上用場
254. urge (v.) 催促；力勸
255. urinate (v.) 小便
256. durable (adj.) 耐用的
257. mammal (n.) 哺乳類
258. fossil (n.) 化石
259. shed light on (phr.) 解釋; 使更清楚
260. diversity (n.) 多樣性
261. drastically (adv.) 急遽地
262. mount (v.) 登上；安裝
263. strengthen (v.) 強化
264. ample (adj.) 充足的
265. gather (v.) 收集
266. restriction (n.) 限制
267. hotspot (n.) 熱點；熱門地區
268. microscope (n.) 顯微鏡
269. extent (n.) 程度
270. plague (n.) 瘟疫；災害
271. dwell (v.) 居住
272. trap (v.) 使陷入; 困住
273. trophy (n.) 戰利品；獎盃
274. represent (v.) 代表
275. sculptor (n.) 雕刻家
276. vice (n.) 惡行
277. troop (n.) 部隊
278. permanent (adj.) 永久的
279. possession (n.) 所有物
280. duplicate (v.) 複製
281. layer (n.) 層
282. remain (v.) 保持；留下
283. bronze (n.) 青銅
284. carve (v.) 雕刻

### 第九回 (1-5 冊)
2. sufficiently (adv.) 充足地
4. slightly (adv.) 稍微
6. jade (n.) 玉
7. in advance (phr.) 提前
8. conservation (n.) 保育；保存
9. reservation (n.) 預訂
11. refugee (n.) 難民
15. gratefully (adv.) 感激地
16. considerably (adv.) 相當地
17. unconsciously (adv.) 無意識地
18. conditionally (adv.) 有條件地
21. abound (v.) 盛產; 富有
23. arrange (v.) 安排
25. arrangement (n.) 安排；佈置
27. greasy (adj.) 油膩的
28. attend (v.) 參加；出席
29. incline (v.) 傾向於；使傾斜
30. acquire (v.) 獲得
31. retain (v.) 保留
32. permit (v.) 允許
35. demonstration (n.) 示威
36. hurdle (n.) 障礙
37. detention (n.) 拘留
41. sympathetic (adj.) 有同情心的
42. adequate (adj.) 足夠的
44. object (v.) 反對
47. blacksmith (n.) 鐵匠
50. give away (phr.) 贈送；洩漏
51. put out (phr.) 撲滅
52. linger on (phr.) 持續存在
57. reside (v.) 居住
63. ward off (phr.) 避開；防止
64. give in (phr.) 屈服
65. hang up (phr.) 掛斷電話
66. lay (v.) 放置；鋪設
67. mammal (n.) 哺乳動物
70. beaver (n.) 海狸
76. inquire (v.) 詢問
79. resort to (phr.) 訴諸於
80. only if (conj.) 只有在…時
88. cholesterol (n.) 膽固醇
90. intake (n.) 攝取量
92. correlated (adj.) 相關的
93. diabetes (n.) 糖尿病
94. dysfunction (n.) 功能障礙
95. adversely (adv.) 不利地
102. contributor (n.) 貢獻者
103. moderation (n.) 適度
104. unknowingly (adv.) 無意識地
105. critical (adj.) 關鍵的；危急的
106. replicate (v.) 複製
110. on a regular basis (phr.) 定期地
111. used to (phr.) 過去習慣
113. automation (n.) 自動化
118. broadcast (v.) 廣播
121. time-consuming (adj.) 耗時的
123. sophisticated (adj.) 精密的；複雜的
126. investigative (adj.) 調查性的
127. all in all (phr.) 總而言之
128. properly (adv.) 適當地
132. degrade (v.) 降低；貶低
134. figure (n.) 數字；人物
141. outperform (v.) 勝過
142. article (n.) 文章；物品
147. liter (n.) 公升
148. respectively (adv.) 分別地
150. account for (phr.) 說明；佔…比例
151. approximately (adv.) 大約
152. general (adj.) 一般的
154. factor (n.) 因素
155. definitely (adv.) 明確地
160. equivalent (adj.) 相等的
162. dehydrated (adj.) 脫水的
163. compensate (v.) 補償
166. urine (n.) 尿液
169. illustrate (v.) 說明；舉例說明
171. consequence (n.) 結果
175. glacier (n.) 冰河
176. accumulate (v.) 累積
177. outward (adj.) 向外的
178. downward (adj.) 向下的
179. occupy (v.) 佔據
180. poll (n.) 民意調查
188. prevail (v.) 盛行；獲勝
187. evaporate (v.) 蒸發
189. ice sheet (n.) 冰蓋
191. period (n.) 期間
192. due (adj.) 到期的
194. harness (v.) 控制
195. stream (n.) 小溪；流
196. irrigate (v.) 灌溉
197. channel (v.) 導入; 引流
198. tap into (phr.) 開發；利用
201. take up (phr.) 佔據；開始從事
202. sufficient (adj.) 足夠的
203. abundant (adj.) 豐富的
204. pile up (phr.) 堆積
205. postpone (v.) 延期
206. cycle (n.) 循環
208. component (n.) 組成
209. therapy (n.) 治療
212. is supposed to (phr.) 應該
213. aloof (adj.) 冷漠的
216. hypothesize (v.) 假設
218. subsequently (adv.) 隨後
220. plausible (adj.) 似合理的
221. nerve (n.) 神經
222. branch (n.) 分支
225. transmit (v.) 傳送
227. dramatically (adv.) 顯著地；戲劇性地
229. development (n.) 發展
230. puberty (n.) 青春期
232. optimal (adj.) 最佳的
235. engaged in (phr.) 從事於
236. cortex (n.) 皮層
237. adolescent (n.) 青少年
238. rational (adj.) 理性的
239. abstract (adj.) 抽象的
240. unpredictable (adj.) 無法預測的
243. hormone (n.) 荷爾蒙
245. intelligent (adj.) 智能的；聰明的
246. simultaneously (adv.) 同時地
    
###我看到會疑惑的 
6. ceaselessly (adv.) 不斷地
11. foul (adj. / n. / v.) 惡臭的；犯規；弄髒
38. antibiotic (n. / adj.) 抗生素；抗菌的
39. rug (n.) 地毯
44. tender (adj. / v. / n.) 溫柔的；提出；投標
45. succulent (adj. / n.) 多汁的；多肉植物
46. broiled (adj.) 烤的
56. compact (adj. / n. / v.) 緊湊的；協議；壓實
57. resilience (n.) 韌性、復原力

###前面幾回仍然不會的 
5. acute (adj.) 急性的；劇烈的
11. adrenaline (n.) 腎上腺素
19. antibiotics (n.) 抗生素
25. aristocrat (n.) 貴族
30. ascend (v.) 上升；攀登
38. be intended to (phr.) 旨在
51. bureau (n.) 局、處、署
52. by all means (phr.) 務必；一定
53. by means of (phr.) 藉由
56. catastrophic (adj.) 災難性的
63. circulate (v.) 流通；傳播
64. circumstance (n.) 情況；環境
70. compact (adj./n./v.) 緊湊的；協議；壓實
71. compensate (v.) 補償
76. compliment (v./n.) 讚美
79. conclusive (adj.) 決定性的；確鑿的
84. conservative (adj.) 保守的
88. constitution (n.) 憲法
91. contempt (n.) 輕視；蔑視
94. conventional (adj.) 傳統的、常規的
95. correspondence (n.) 通信
96. cortex (n.) 皮層
98. court (n./v.) 法院；追求
101. cultivate (v.) 培養；耕種
106. custody (n.) 監護；拘留
108. deceptively (adv.) 欺騙地；看似…地
112. deposit (n.) 存款；押金
114. detention (n.) 拘留
115. devastating (adj.) 毀滅性的
125. drainage (n.) 排水系統
127. dreadful (adj.) 可怕的
130. dwell (v.) 居住
131. dysfunction (n.) 功能障礙
132. elastic (adj.) 有彈性的
135. enclosure (n.) 圍牆；附件
136. encyclopedia (n.) 百科全書
137. endeavor (n./v.) 努力；嘗試
138. enneagram (n.) 九型人格
142. escort (v./n.) 護送；陪同
160. frantically (adv.) 瘋狂地；緊張忙亂地
162. fuel (v.) 加劇；助長
163. furnish (v.) 配備；供應
165. get along with (phr.) 與…合拍
168. glacier (n.) 冰河
169. go off (phr.) 警報響起
172. graze (v./n.) 擦傷；放牧
175. grocery (n.) 雜貨店
176. gulp (v./n.) 大口吞；吞嚥
181. hoarse (adj.) 沙啞的
182. hold on to (phr.) 堅持；抓牢
202. incline (v.) 傾向於；使傾斜
203. inclusive (adj.) 包含的、包容的
204. inconsistent (adj.) 不一致的
210. inspection (n.) 檢查；檢驗
214. intimidate (v.) 威嚇；恐嚇
222. lavishly (adv.) 奢華的
225. lease (n./v.) 租約；租賃
227. let alone (phr.) 更不用說
228. liability (n.) 責任；負債
240. melancholy (n./adj.) 憂鬱
241. merchandise (n.) 商品
242. merit (n.) 優點；價
250. mount (v.) 安裝；固定；登上
260. nourish (v.) 滋養；培養
263. odor (n.) 氣味
264. on account of (prep.) 因為
268. on top of that (phr.) 除此之外
278. parallel (adj.) 平行的
282. period (n./adj.) 期間；時代的
283. permit (v.) 允許
289. picturesque (adj.) 如畫的；生動的
292. plague (n./v.) 瘟疫；使困擾
325. reluctant (adj.) 不情願的；勉強的
329. resort to (phr.) 訴諸於
333. revenue (n.) 收入；收益
349. sheer (adj.) 完全的；十足的
350. shiver (v./n.) 發抖
352. shrug (v./n.) 聳肩
356. sinister (adj.) 不祥的；邪惡的
359. sniff (v./n.) 嗅；吸氣
360. sober (adj.) 清醒的；冷靜的
361. solemn (adj.) 莊嚴的；嚴肅的
366. spontaneously (adv.) 自發地
368. spur (v./n.) 激勵；馬刺
381. surpassing (adj.) 卓越的；超越的
386. take charge of (phr.) 負責…
391. testimony (n.) 證詞
405. unprecedented (adj.) 前所未有的
407. unsurpassed (adj.) 無與倫比的
413. vertical (adj.) 垂直的
414. vice (n.) 惡行
415. vigorous (adj.) 有活力的；精力充沛的
430. archer (n.) 弓箭手、射手
431. strip (v./n.) 剝掉、除去；條狀物
436. compromise (v./n.) 妥協、讓步
437. surreal (adj.) 超現實的、離奇的
438. mill (n./v.) 磨坊、工廠；磨碎
439. scenic (adj.) 風景優美的
442. irritate (v.) 使惱火、激怒
444. promiscuous (adj.) 雜亂的、(性) 濫交的
447. counterpart (n.) 對應的人或物
452. autism (n.) 自閉症
458. imitation (n.) 模仿、仿製品
459. meticulously (adv.) 一絲不苟地、極細心地
460. utter (adj./v.) 完全的；說出、發出聲音
461. auspicious (adj.) 吉利的、幸運的
464. ostentatious (adj.) 炫耀的、賣弄的
466. conform (v.) 順應、遵守、符合
468. stir up (phr.) 挑起 (爭端)、激起 (情緒)
469. curriculum (n.) 課程
471. fungus (n.) 真菌、菌類
472. baffled (adj.) 感到困惑的
478. collision (n.) 碰撞、衝突
479. pesticides (n.) 殺蟲劑
482. vanish (v.) 消失
483. invasive (adj.) 侵入性的、侵略性的
484. starling (n.) 椋鳥
485. hemispheric (adj.) 半球的
487. migratory (adj.) 遷徙的

###一百題高頻率單字
1. advanced (v.) 前進/推進
2. halted (v.) 停止
3. rendered (v.) 使成為/呈現
4. reinforced (v.) 增強
5. regulations (n.) 規定
6. consensus (n.) 共識
7. violation (n.) 違反
8. announcement (n.) 公告/宣布
9. ventured (v.) 冒險
10. enhanced (v.) 提升/增強
11. addressed (v.) 處理/論述
12. property (n.) 財產
13. boundary (n.) 邊界
14. margin (n.) 頁邊空白
15. shelter (n.) 庇護所
16. offensive (adj.) 冒犯的/難聞的
17. infectious (adj.) 傳染性的
18. absolute (adj.) 絕對的
19. peculiar (adj.) 奇特的/怪異的
20. agreeable (adj.) 令人愉快的
21. compulsory (adj.) 強制的/必修的
22. eventual (adj.) 最終的
23. initiated (v.) 發起/創始
24. disrupted (v.) 干擾/中斷
25. distinctive (adj.) 獨特的/有特色的
26. sturdy (adj.) 結實的/堅固的
27. appealing (adj.) 有吸引力的
28. affordable (adj.) 負擔得起的
29. qualification (n.) 資格
30. contentment (n.) 滿足
31. devotion (n.) 奉獻/投入
32. monotony (n.) 單調/無聊
33. committed (v.) 犯下
34. accessed (v.) 存取
35. produced (v.) 引起/產生
36. hastened (v.) 加速
37. shifted (v.) 轉移
38. fortified (v.) 加強/強化
39. conducted (v.) 執行/進行
40. dismissed (v.) 解僱/忽略
41. concealed (v.) 隱藏
42. revealed (v.) 揭露/顯示
43. literal (adj.) 字面上的
44. qualified (adj.) 有資格的
45. moderate (adj.) 中等的/適度的
46. constructive (adj.) 建設性的
47. influential (adj.) 有影響力的
48. coarse (adj.) 粗糙的
49. vigorous (adj.) 精力充沛的
50. portable (adj.) 手提式的
51. capacity (n.) 能力/容量
52. depression (n.) 沮喪/蕭條
53. bankruptcy (n.) 破產
54. celebration (n.) 慶祝
55. rigid (adj.) 僵硬的
56. solitary (adj.) 獨自的/獨處的
57. contagious (adj.) 具傳染性的
58. liability (n.) 責任/債務/負擔
59. generosity (n.) 慷慨
60. integrity (n.) 正直/誠信/完整性
61. sincerity (n.) 真誠
62. resolve (v.) 解決
63. recall (v.) 回想/想起
64. counter (v.) 反擊/對抗
65. indispensable (adj.) 不可或缺的
66. comprehensible (adj.) 可理解的
67. permissible (adj.) 可允許的
68. contemplated (v.) 深思/沉思
69. acknowledged (v.) 被認可/承認
70. inquired (v.) 詢問
71. regulated (v.) 規範/管理
72. hostile (adj.) 敵對的
73. barren (adj.) 貧瘠的
74. minimal (adj.) 最小的/極微的
75. systematic (adj.) 系統性的
76. whipped (v.) 鞭打/猛抽
77. split (v.) 分裂/分開
78. littered (v.) 亂丟垃圾/散落
79. dodged (v.) 躲避/閃避
80. arrays (n.) 陣列/排列
81. entries (n.) 進入/項目
82. outlooks (n.) 觀點/前景
83. illusions (n.) 幻想/錯覺
84. choke (v.) 哽住/表現失常
85. disturb (v.) 打擾
86. enclose (v.) 圍住/隨函附上
87. inject (v.) 注射
88. spicy (adj.) 辛辣的
89. slender (adj.) 苗條的
90. slight (adj.) 輕微的
91. slippery (adj.) 滑的
92. advantage (n.) 優勢
93. revenge (n.) 報復
94. remedy (n.) 補救/藥物
95. credit (n.) 功勞/榮譽/信譽
96. casual (adj.) 隨意的/非正式的
97. fragile (adj.) 脆弱的
98. remote (adj.) 遙遠的
99. vacant (adj.) 空缺的/閒置的
100. fluid (n.) 流體/液體
101. scandal (n.) 醜聞
102. drought (n.) 乾旱
103. nuisance (n.) 討厭的人事物
104. awe (n.) 敬畏/驚嘆
105. relief (n.) 緩解/寬慰
106. tribute (n.) 致敬/貢品
107. fraction (n.) 小部分/分數
108. seasonal (adj.) 季節性的
109. persistent (adj.) 持續的/頑固的
110. errand (n.) 差事/跑腿
111. resignation (n.) 辭職/順從/辭呈
112. sensation (n.) 感覺/轟動
113. innovation (n.) 創新
114. delicacy (n.) 美味/精緻
115. approval (n.) 批准/認可
116. compliments (n.) 讚美
117. guarantees (n.) 保證
118. dimensions (n.) 尺寸/維度
119. resolutions (n.) 決心/解析度
120. identical (adj.) 完全相同的
121. indifferent (adj.) 冷漠的
122. quarrelsome (adj.) 好爭吵的
123. artistic (adj.) 藝術的
124. manual (adj.) 手工的/體力的
125. eligible (adj.) 合格的/符合條件的
126. noted (adj.) 著名的
127. ecological (adj.) 生態的
128. promising (adj.) 有前途的
129. appropriate (adj.) 適當的
130. multiple (adj.) 多樣的/多重的
131. visible (adj.) 可見的
132. exotic (adj.) 異國情調的
133. available (adj.) 可取得的/有空的
134. grim (adj.) 嚴峻的/糟糕的
135. mature (adj.) 成熟的
136. vague (adj.) 模糊的
137. departure (n.) 離開
138. dispute (n.) 爭執/爭議
139. culture (n.) 文化
140. accessory (n.) 配件
141. monopoly (n.) 壟斷/專賣
142. ballot (n.) 選票
143. restored (v.) 恢復
144. enforced (v.) 執行/強制
145. chronically (adv.) 長期地/持續地
146. consistently (adv.) 一致地
147. randomly (adv.) 隨機地
148. virtually (adv.) 實際上/幾乎
149. excessive (adj.) 過度的
150. unethical (adj.) 不道德的
151. forceful (adj.) 有力的/強勢的
152. rehearsed (v.) 演練/排練
153. diminished (v.) 減少
154. strangled (v.) 勒死/扼殺
155. momentum (n.) 動能/氣勢
156. certificate (n.) 證書
157. signature (n.) 簽名
158. frantically (adv.) 瘋狂地
159. distinctly (adv.) 清楚地
160. tremendously (adv.) 極大地
161. contagiously (adv.) 具傳染力地
162. steady (adj.) 穩定的
163. routine (adj.) 例行的/日常的
164. mobile (adj.) 可移動的
165. conscious (adj.) 有意識的
166. tokens (n.) 代幣/標記
167. fragments (n.) 碎片
168. warranties (n.) 保固/保證
169. relevantly (adv.) 相關地
170. decently (adv.) 得體地/體面地
171. compatibly (adv.) 相容地
172. realistic (adj.) 現實的
173. enforcement (n.) 執行/實施
174. ultimate (adj.) 最終的
175. enormous (adj.) 巨大的
176. intimate (adj.) 親密的
177. shortage (n.) 短缺
178. ingenuity (n.) 靈巧/足智多謀
179. readily (adv.) 輕易地/立即/容易地
180. fairly (adv.) 相當地
181. merely (adv.) 僅僅
182. barely (adv.) 幾乎不
183. outnumbered (v.) 在數量上超過
184. contradicted (v.) 反駁/矛盾
185. triggered (v.) 引發
186. disturbance (n.) 擾亂
187. salvation (n.) 拯救
188. remainder (n.) 剩餘部分
189. strictly (adv.) 嚴格地
190. variously (adv.) 各種各樣地
191. recruit (v.) 招募
192. absorb (v.) 吸收
193. catastrophe (n.) 災難
194. prevention (n.) 預防
195. hysterically (adv.) 歇斯底里地
196. simultaneously (adv.) 同時地
197. resistantly (adv.) 抵抗地
198. conventions (n.) 慣例/大會
199. intensity (n.) 強度
200. purchase (n.) 購買
201. reference (n.) 參考
202. necessity (n.) 必要性
203. career (n.) 職業
204. dilemma (n.) 兩難/困境
205. scenarios (n.) 情境
206. fatalities (n.) 死亡人數
207. barriers (n.) 障礙
208. occupants (n.) 乘客/佔據者
209. consent (n.) 同意
210. preference (n.) 偏好
211. reliance (n.) 依賴
212. sensitivity (n.) 敏感度
213. reflection (n.) 反思/反射
214. trial (n.) 審判/試驗
215. route (n.) 路線
216. quest (n.) 追求/探求
217. strike (n.) 罷工/打擊
218. rippled (v.) 起漣漪
219. shattered (v.) 破碎
220. mingled (v.) 混合
221. glistened (v.) 閃耀
222. legitimate (adj.) 合法的
223. controversial (adj.) 有爭議的
224. inclusive (adj.) 包容的
225. nonmilitant (adj.) 非武裝的
226. dominantly (adv.) 支配地
227. legitimately (adv.) 合法地
228. verbally (adv.) 口頭地
229. direction (n.) 方向
230. obstacle (n.) 障礙
231. aquarium (n.) 水族館
232. circulation (n.) 循環/發行/流通
233. graduation (n.) 畢業
234. instructions (n.) 指示
235. supervisions (n.) 監督
236. preparations (n.) 準備
237. misleading (adj.) 誤導的
238. artificial (adj.) 人造的
239. dominant (adj.) 支配性的/占優勢的
240. absurd (adj.) 荒謬的
241. flexible (adj.) 有彈性的
242. optional (adj.) 可選擇的
243. departed (v.) 離開
244. resumed (v.) 恢復/重新開始
245. transported (v.) 運輸
246. corresponded (v.) 符合/對應
247. occasional (adj.) 偶爾的
248. elaborate (adj.) 精心製作的
249. immediate (adj.) 立即的
250. fasten (v.) 繫緊
251. lengthen (v.) 延長
252. hasten (v.) 加速
253. strengthen (v.) 增強
254. coveted (adj.) 夢寐以求的
255. surpassed (adj.) 超過的
256. rotated (adj.) 旋轉的
257. populated (adj.) 人口稠密的
258. fabulously (adv.) 極好地
259. recklessly (adv.) 魯莽地
260. noticeably (adv.) 顯著地
261. disgracefully (adv.) 丟臉地
262. circulating (adj.) 流通的/循環的
263. applauding (adj.) 鼓掌的
264. flourishing (adj.) 蓬勃發展的
265. exceeding (adj.) 超過的
266. actively (adv.) 積極地
267. earnestly (adv.) 認真地
268. naturally (adv.) 自然地
269. jointly (adv.) 共同地/聯合地
270. ancestors (n.) 祖先
271. commuters (n.) 通勤者
272. instructors (n.) 教練/導師
273. siblings (n.) 兄弟姊妹
274. crippled (v.) 損壞/癱瘓/使殘廢
275. accelerated (v.) 加速
276. emerged (v.) 出現/顯露
277. flashed (v.) 閃現
278. rushing (v.) 衝/奔流
279. floated (v.) 漂浮
280. obstinate (adj.) 固執的
281. cautious (adj.) 謹慎的
282. reputations (n.) 名聲
283. precautions (n.) 預防措施
284. destinations (n.) 目的地
285. motivations (n.) 動機
286. perception (n.) 知覺/察覺
287. revival (n.) 復興
288. morale (n.) 士氣
289. consolation (n.) 慰藉
290. contaminated (v.) 污染
291. eliminated (v.) 消除
292. represented (v.) 代表
293. confirmed (v.) 確認
294. manipulated (v.) 操縱/竄改
295. penetrated (v.) 滲透/穿透
296. intensified (v.) 加劇

###常用片語
1. a slip of tongue (phr.) 一時說錯；失言
2. a piece of cake (phr.) 極其容易
3. a castle in the air / a pie in the sky (phr.) 空中樓閣；不切實際夢想
4. above all (phr.) 尤其；最重要的是…
5. account for (phr.) 說明；佔多少分量
6. all thumbs (phr.) 笨拙；笨手笨腳
7. around the corner (phr.) 即將到來
8. as ... as possible (phr.) 盡可能
9. as busy a bee (phr.) 十分忙碌
10. as follows (phr.) 如下
11. as usual (phr.) 如往常
12. as a result (phr.) 因此
13. as far as N be concerned (phr.) 就…而言
14. at once (phr.) 立刻
15. at ease (phr.) 自在
16. at present (phr.) 目前
17. at random (phr.) 隨意地
18. at will (phr.) 任意；隨意
19. at the thought of (phr.) 一想到
20. at the cost / expense of (phr.) 犧牲；以…為代價
21. at the risk of (phr.) 冒…的風險
22. be on diet (phr.) 節食
23. be confronted / faced with (phr.) 面對
24. be fed up with (phr.) 受夠了
25. be burdened / overloaded with (phr.) 承擔著…
26. be obliged to (phr.) 有義務去…
27. be addicted to (phr.) 對…入迷；上癮
28. be appreciative of (phr.) 感激
29. be bathed in (phr.) 沉浸在…
30. be caught / stuck in (phr.) 處於…困境
31. be dying / eager for (phr.) 渴望
32. be immersed in (phr.) 沉溺於
33. devoted / dedicated to (phr.) 致力於…
34. be Greek to sb. (phr.) 對…一竅不通
35. be overwhelmed with (phr.) 對…無法承受；被…震撼
36. be obsessed with (phr.) 對…著迷；負荷著…
37. be pleasant to the eye / ear / nose (phr.) 賞心悅目 / 悅耳 / 芳香撲鼻
38. be responsible for (phr.) 負責
39. bear / keep in mind (phr.) 謹記在心
40. beat around the bush (phr.) 旁敲側擊；拐彎抹角
41. break down (phr.) 故障；崩潰；分解
42. break the ice (phr.) 打破沉默 (冷場)
43. bump into (phr.) 撞上；不期而遇
44. burn the midnight oil (phr.) 開夜車；熬夜
45. burn the candles at both ends (phr.) 十分忙碌
46. bridge the gap between A and B (phr.) 減少…差距
47. by leaps and bounds (phr.) 突飛猛進；進展神速
48. broaden / expand one's horizons (phr.) 開拓視野；增廣見聞
49. bring out the best in sb. (phr.) 使…把最好的發揮出來
50. catch on (phr.) 風行…
51. catch one's eye / draw one's attention (phr.) 吸引…注意
52. carry out (phr.) 實現
53. catch / keep up with (phr.) 趕上
54. clear up (phr.) 澄清；放晴
55. come across / run across / run into (phr.) 巧遇；不期而遇
56. come / flash into one's mind (phr.) 突然想起
57. come into one's view (phr.) 映入眼簾
58. come into oneself (phr.) 甦醒過來
59. come up with (phr.) 想出
60. come down with (phr.) 染上；罹患
61. cut down on (phr.) 減少
62. cut in line (phr.) 插隊
63. compensate for (phr.) 補償；彌補
64. dawn on sb. (phr.) 開始知曉
65. deprive sb. of sth. (phr.) 剝奪
66. drop in on sb. / drop by (phr.) 順道拜訪
67. due to (phr.) 由於；因為
68. engage in (phr.) 參與；從事
69. face the music (phr.) 面對現實
70. fall behind (phr.) 落後
71. fall short of (phr.) 不足；未達到
72. fall victim to (phr.) 成為…犧牲者
73. fly into a rage / fury (phr.) 勃然大怒
74. from now on (phr.) 從現在開始
75. frown on (phr.) 不贊成
76. from hand to mouth (phr.) 僅足餬囗
77. from time to time (phr.) 有時
78. get a bird's eye view of (phr.) 鳥瞰
79. get along with sb. (phr.) 和…相處
80. get cold feet (phr.) 害怕
81. get in one's way (phr.) 擋住…的路
82. get into trouble (phr.) 惹上麻煩
83. get on one's nerves (phr.) 使…心煩
84. get over (phr.) 克服困難；復原
85. get in touch with sb. (phr.) 保持聯絡
86. get rid of (phr.) 去除；擺脫
87. give and take (phr.) 妥協；交換意見；施與受
88. give rise to (phr.) 產生；造成
89. give up (phr.) 放棄
90. go blank (phr.) 一片空白
91. go too far (phr.) 太過分
92. go through (phr.) 經歷
93. hand down (phr.) 流傳給下一代
94. hand in (phr.) 繳交
95. hang out (phr.) 閒晃
96. have in common (phr.) 有…共通點
97. have butterflies in one's stomach (phr.) 非常緊張
98. head for (phr.) 前往
99. hold back (phr.) 抑制；壓抑
100. hold on to (phr.) 堅持；緊握
101. hustle and bustle (phr.) 忙碌；熙熙攘攘
102. in advance (phr.) 事先；預先
103. in light of (phr.) 有鑑於
104. in a hurry / in haste (phr.) 匆忙
105. in addition to (phr.) 除了…之外還有…
106. in charge of (phr.) 負責
107. in contrast to (phr.) 與…相較
108. in full bloom (phr.) 盛開
109. in detail (phr.) 詳細地
110. in harmony with (phr.) 與…和諧地
111. in one's opinion (phr.) 依…之見
112. in memory of (phr.) 紀念；懷念
113. in person (phr.) 親自
114. in particular (phr.) 特別地
116. keep an eye on (phr.) 留意
117. let go of (phr.) 放棄；擺脫
118. leave behind (phr.) 忘了攜帶；遺留
119. live up to / meet one's expectation (phr.) 達到…期望
120. look after (phr.) 照顧
121. look forward to (phr.) 期望
122. look up to sb. (phr.) 尊敬
123. look down on sb. (phr.) 輕視
124. lose one's head (phr.) 失去理智
125. lose one's temper (phr.) 發脾氣
126. keep one's fingers crossed (phr.) 雙手合十祈求…
127. keep one's head (phr.) 保持鎮定
128. make both ends meet (phr.) 收支平衡
129. make up one's mind (phr.) 下定決心
130. make a difference (phr.) 有影響
131. make use of / take advantage of (phr.) 利用
132. make up for (phr.) 補償
133. not to mention (phr.) 更別提了
134. on purpose (phr.) 故意
135. on the whole (phr.) 總而言之
136. out of date (phr.) 過時的
137. out of order (phr.) 故障
138. out of the blue (phr.) 出乎意外地
139. on pins and needles (phr.) 如坐針氈；坐立不安
140. pass out (phr.) 昏厥
141. pay off (phr.) 有回報
142. pay attention to (phr.) 注意
143. play tricks on sb. (phr.) 捉弄
144. pose a threat to (phr.) 對…造成威脅
145. put oneself in one's shoes (phr.) 設身處地為人著想
146. put sth. into practice (phr.) 付諸實行
147. put up with (phr.) 容忍
148. react to (phr.) 對…有反應
149. regardless of (phr.) 無論；不管
150. resort to (phr.) 訴諸於
151. run errands (phr.) 跑腿
152. run out of (phr.) 用完
153. run the risk of (phr.) 冒著…風險
154. save sth. for a rainy day (phr.) 以備不時之需
155. scare sb. out of one’s wits (phr.) 把…嚇破膽
156. set a good example (phr.) 樹立好榜樣
157. shed / cast light on (phr.) 使…明白…
158. stand up for (phr.) 支持
159. stand up against (phr.) 對抗
160. strike a chord with sb. (phr.) 扣人心弦
161. strike a balance between A and B (phr.) 在A與B之間取得平衡
162. take N by storm (phr.) 風靡；席捲
163. take for granted (phr.) 視…為理所當然
164. take into consideration / account (phr.) 把…列入考慮
165. take charge of (phr.) 管理
166. take delight / pleasure in (phr.) 喜愛；享受
167. take measures (phr.) 採取措施
168. take pains (phr.) 費盡心力
169. take place (phr.) 發生
170. take turns (phr.) 輪流
171. turn over a new leaf (phr.) 洗心革面；重新做人
172. turn one's back on sb. (phr.) 不理會
173. turn one's ear to (phr.) 對…充耳不聞
174. to one's heart's content (phr.) 令…心滿意足
175. to the point (phr.) 中肯的；切中要點
176. to tell the truth (phr.) 老實說
177. under no circumstances (phr.) 絕不
178. watch one's tongue (phr.) 小心言語
179. when it comes to (phr.) 談到
180. with flying colors (phr.) 順利成功地
181. with honors / distinction (phr.) 以…優異的成績

###學測112
1.	chewing gum (n. phr.) 口香糖
2.	passenger (n.) 乘客
3.	remove (v.) 去除
4.	sticky (adj.) 黏的
5.	greasy (adj.) 油膩的
6.	clumsy (adj.) 笨拙的
7.	mighty (adj.) 強大的
8.	model (n.) 模特兒
9.	adopt (v.) 採取
10.	elegant (adj.) 優雅的
11.	clap (v./n.) 拍手
12.	toss (v./n.) 扔；拋
13.	pose (n./v.) 姿勢；擺姿勢
14.	snap (v./n.) 拍照；啪一聲折斷
15.	trace (v.) 追溯
16.	arrival (n.) 到達
17.	siblings (n.) 親兄弟姊妹
18.	commuters (n.) 通勤者
19.	ancestors (n.) 祖先
20.	instructors (n.) 講師；教練
21.	rushed (v.) 趕緊
22.	only to (phr.) 結果卻
23.	stock (n.) 庫存
24.	blank (adj.) 空白的
25.	bare (adj.) 空的；赤裸的
26.	hollow (adj.) 空心的
27.	queer (adj.) 古怪的
28.	in person (phr.) 親自
29.	apology (n.) 道歉
30.	liability (n.) 責任；義務
31.	generosity (n.) 慷慨
32.	integrity (n.) 正直；誠信
33.	sincerity (n.) 真誠
34.	astonishing (adj.) 令人驚訝的
35.	vividly (adv.) 生動地；清晰地
36.	resolve (v./n.) 解決；決心
37.	fraction (n.) 小部分；分數
38.	privilege (n.) 特權
39.	recall (n./v.) 回憶
40.	evidence (n.) 證據
41.	claims (n.) 主張；聲稱
42.	provoke (v.) 挑釁；煽動
43.	counter (v.) 反駁；抵銷
44.	expose (v.) 揭露
45.	convert (v.) 轉變
46.	Corrupt (adj.) 貪腐的
47.	officials (n.) 官員
48.	misguided (adj.) 被誤導的
49.	enormous (adj.) 巨大的
50.	crippled (v.) 嚴重削弱；使殘廢
51.	accelerated (v.) 加速
52.	rendered (v.) 使變得；提供
53.	ventured (v.) 冒險
54.	record (adj.) 創紀錄的
55.	stadium (n.) 體育場
56.	choked (v.) 堵塞
57.	disturbed (v.) 打擾
58.	enclosed (v.) 圍住；隨函附上
59.	injected (v.) 注射
60.	unbiased (adj.) 不偏不倚的
61.	political ideology (n. phr.) 政治意識形態
62.	undoubtedly (adv.) 毫無疑問地
63.	roughly (adv.) 大約地；粗糙地
64.	understandably (adv.) 合乎情理地
65.	supposedly (adv.) 據稱
66.	network (n.) 網絡
67.	cracks (n.) 裂縫
68.	gaps (n.) 縫隙
69.	outermost (adj.) 最外層的
70.	edges (n.) 邊緣
71.	precisely (adv.) 精確地
72.	jigsaw puzzle (n. phr.) 拼圖
73.	branch (n.) 樹枝
74.	phenomenon (n.) 現象
75.	discussing (v.) 討論
76.	proposing (v.) 提出；建議
77.	treetops (n.) 樹冠
78.	collide (v.) 碰撞
79.	maintain (v.) 維持
80.	resources (n.) 資源
81.	nutrients (n.) 養分
82.	intense (adj.) 劇烈的
83.	struggle (n./v.) 掙扎；競爭
84.	resulting from (phr.) 起因於
85.	allow (v.) 允許
86.	enhance (v.) 增強
87.	limit (v.) 限制
88.	spread (n./v.) 擴張；蔓延
89.	potentially (adv.) 潛在地
90.	transmission (n.) 傳播
91.	decades (n.) 數十年
92.	investigation (n.) 調查
93.	consensus (n.) 共識
94.	mysterious (adj.) 神秘的
95.	universal (adj.) 普遍的
96.	productive (adj.) 多產的；有成效的
97.	conventional (adj.) 傳統的
98.	multiple (adj.) 多樣的
99.	reliance on (phr.) 依賴
100.	exposure to (phr.) 暴露於
101.	sensitivity to (phr.) 對...敏感
102.	reflection on (phr.) 反射；深思
103.	Despite (prep.) 儘管
104.	Gravity (n.) 重力；地心引力
105.	agenda (n.) 議程；待辦事項
106.	overcome (v.) 克服
107.	rocket (n.) 火箭
108.	affects (v.) 影響
109.	astronauts (n.) 太空人
110.	evolved (v.) 進化
111.	exist (v.) 存在；生存
112.	weightlessness (n.) 無重量狀態
113.	microgravity (n.) 微重力
114.	fluids (n.) 流體；液體
115.	absence (n.) 缺乏
116.	upper (adj.) 上方的
117.	resembling (v.) 像；與...相似
118.	effect (n.) 影響；效果
119.	nausea (n.) 噁心；反胃
120.	syndrome (n.) 症候群
121.	figure out (phr. v.) 弄清楚；想出
122.	physical (adj.) 身體的；物理的
123.	perceptual (adj.) 感知的；知覺的
124.	mental (adj.) 心理的；精神的
125.	external (adj.) 外部的
126.	redistribute (v.) 重新分配
127.	contagious (adj.) 具傳染性的
128.	unusual (adj.) 不尋常的
129.	severe (adj.) 嚴重的
130.	aggressive (adj.) 挑釁的；積極進取的
131.	varied with (phr.) 隨...而改變
132.	transferred from (phr.) 從...轉移
133.	brought about (phr.) 導致；引起
134.	accompanied by (phr.) 伴隨著
135.	sustain (v.) 維持；支撐
136.	plain (adj.) 純的；平易的
137.	contains (v.) 包含
138.	calories (n.) 卡路里
139.	bound (adj.) 受約束的；注定的
140.	sweats (v./n.) 流汗
141.	replace (v.) 取代；更換
142.	get rid of (phr. v.) 擺脫；去除
143.	urine (n.) 尿液
144.	amounts (n.) 量
145.	stimulate (v.) 刺激；激發
146.	carbohydrates (n.) 碳水化合物
147.	functional (adj.) 功能性的；實用的
148.	restoring (v.) 恢復
149.	maintaining (v.) 維持
150.	normal (adj.) 正常的
151.	average (adj./n.) 平均的；一般的
152.	secret (n./adj.) 秘密
153.	significant (adj.) 顯著的；重大的
154.	consciousness (n.) 意識；清醒
155.	take in (phr. v.) 攝取；吸收
156.	in one go (phr.) 一口氣；一次地
157.	absorption (n.) 吸收
158.	effective (adj.) 有效的
159.	alert (adj./n.) 警覺的
160.	option (n.) 選項；選擇
161.	combat (v./n.) 戰鬥；對抗
162.	status (n.) 狀態；地位 
163.	senses (n.) 感官
164.	intermix (v.) 混合
165.	trigger (v.) 觸發；引起
166.	sensation (n.) 感覺；知覺
167.	tongue (n.) 舌頭
168.	evoked (v.) 喚起；引起
169.	persistently (adv.) 持續地；堅持地
170.	compelling (adj.) 令人信服的；強有力的
171.	brain scans (n. phr.) 大腦掃描
172.	processing (v./n.) 處理
173.	brain (n.) 大腦
174.	certain (adj.) 特定的；某些
175.	inherited (v.) 遺傳；繼承
176.	acquired (v.) 後天習得的；獲得
177.	genetic (adj.) 基因的；遺傳學的
178.	gene (n.) 基因
179.	identified (v.) 識別；確認
180.	flavors (n.) 口味；味道
181.	more often than not (phr.) 往往；多半
182.	rare (adj.) 罕見的
183.	population (n.) 人口；群體
184.	associate (v.) 聯想；聯繫
185.	further (adv./v.) 進一步地；促進
186.	infancy (n.) 嬰兒期；初期
187.	consistency (n.) 一致性
188.	meanwhile (adv.) 同時
189.	shape (v.) 塑造；形成
190.	be accused of (phr.) 被指控；被譴責


###學測113
1.	desire (v.) 渴望
2.	figure (n.) 身材；體態
3.	maintain (v.) 維持
4.	spicy (adj.) 辛辣的
5.	slender (adj.) 苗條的
6.	slight (adj.) 輕微的；纖瘦的
7.	slippery (adj.) 滑的
8.	emerging (v-ing.) 浮現；出現
9.	flashing (v-ing.) 閃爍
10.	floating (v-ing.) 漂浮
11.	due (adj.) 預期的；到期的
12.	roasting (adj.) 極熱的
13.	heat (n.) 熱氣
14.	humidity (n.) 濕度
15.	sticky (adj.) 黏糊的
16.	cool off (phr.) 消暑；降溫
17.	density (n.) 密度
18.	atmosphere (n.) 大氣；氣氛
19.	stand (v.) 經受；忍受
20.	military (n./adj.) 軍事（的）
21.	forceful (adj.) 強有力的
22.	realistic (adj.) 現實的
23.	compulsory (adj.) 強制性的；義務的
24.	distinctive (adj.) 獨特的；有特色的
25.	complained (v.) 抱怨
26.	advantage (n.) 優勢；利益
27.	credit (n.) 功勞；信譽
28.	located (adj.) 位於...的
29.	transport (n.) 交通運輸
30.	proposes (v.) 提議
31.	contains (v.) 包含
32.	confirms (v.) 確認
33.	supplies (n.) 供應量；物資
34.	critically (adv.) 嚴重地
35.	appeal (n./v.) 呼籲；吸引力
36.	approach (n.) 方法；途徑
37.	operation (n.) 手術；運作
38.	observation (n.) 觀察
39.	eligibly (adv.) 合格地
40.	randomly (adv.) 隨機地
41.	mystery (n.) 神祕
42.	data (n.) 數據；資料
43.	referred to as (phr.) 被稱為
44.	inquiries (n.) 查詢；詢問
45.	assigned (v.) 指派；分配
46.	evaluating (v-ing.) 評估
47.	standard procedures (n. phr.) 標準程序
48.	checklist (n.) 核對清單
49.	directions (n.) 指示；說明
50.	consistency (n.) 一致性
51.	pretend (v.) 假裝
52.	arguing (v-ing.) 爭論
53.	identify (v.) 辨識；找出
54.	thereby (adv.) 從而；因此
55.	enhance (v.) 提升；增進
56.	gain (v.) 獲得
57.	competitive edge (n. phr.) 競爭優勢
58.	call for (phr.) 要求；呼籲
59.	pose as (phr.) 冒充；假扮
60.	attend to (phr.) 照顧；處理
61.	engage in (phr.) 從事；參與
62.	keen competitions (n. phr.) 激烈競爭
63.	financial hardship (n. phr.) 經濟困難
64.	racial conflicts (n. phr.) 種族衝突
65.	personal bias (n. phr.) 個人偏見
66.	improvement (n.) 改進；進步
67.	management (n.) 管理
68.	groans (v.) 呻吟；抱怨
69.	reluctantly (adv.) 不情願地
70.	adjustable (adj.) 可調節的
71.	relatively (adv.) 相對地
72.	unreliable (adj.) 不可靠的
73.	equipped with (phr.) 配備有...
74.	tap (v.) 輕敲
75.	familiar presences (n. phr.) 熟悉的存在
76.	alleys (n.) 巷弄
77.	remained (v.) 維持；依然
78.	dismissed (v.) 解散；屏棄
79.	declined (v.) 下降；衰退
80.	match (v.) 相配；比得上 
81.	hilltop (n.) 山頂
82.	tsunami (n.) 海嘯
83.	white (adj.) 白色的
84.	booth (n.) 亭子；小隔間
85.	claimed (v.) 奪走（生命）
86.	private (adj.) 私人的；隱密的
87.	navigate (v.) 渡過；導航
88.	positioned (v.) 安置；放置
89.	relative (n.) 親戚
90.	dial (n./v.) 撥號盤；撥號
91.	disconnected (adj.) 切斷的；沒接通的
92.	stated (v.) 陳述；聲明
93.	interview (n.) 採訪；面試
94.	soulful (adj.) 深情的；充滿情感的
95.	renders (v.) 使成為；賦予
96.	grieving (adj./v-ing.) 悲痛的；哀悼的
97.	process (n.) 過程
98.	devastating (adj.) 毀滅性的
99.	gradually (adv.) 逐漸地
100.	resembling (v-ing.) 像；與...相似
101.	coping with (phr.) 應對；處理
102.	sorrow (n.) 悲傷
103.	departed (adj.) 過世的
104.	mechanism (n.) 機制
105.	manageable (adj.) 可處理的；可控制的
106.	fateful (adj.) 決定性的；命運攸關的
107.	brought forth (phr.) 產生；提出 
108.	surgeon (n.) 外科醫生
109.	twisted (v.) 扭傷；扭轉
110.	agonizing (adj.) 極其痛苦的
111.	barely (adv.) 幾乎不；僅僅
112.	aspirin (n.) 阿斯匹靈（止痛藥）
113.	sprained (v.) 扭傷（關節、韌帶）
114.	approach (n.) 方法；途徑
115.	outdated (adj.) 過時的；老舊的
116.	counterproductive (adj.) 適得其反的
117.	consult (v.) 諮詢；請教
118.	treatment (n.) 治療
119.	caution (v.) 警告；提醒
120.	necessary (adj.) 必要的
121.	distances (n.) 距離
122.	engage in (phr.) 從事；進行
123.	consensus (n.) 共識
124.	moderate (adj.) 適度的；溫和的
125.	speed (v.) 加速
126.	healing (n.) 癒合；康復
127.	despite (prep.) 儘管
128.	accurate (adj.) 準確的；精確的
129.	diagnosis (n.) 診斷
130.	ruled out (phr.) 排除
131.	instead of (phr.) 代替；而不是


###學測114
1.	leaking faucet (n. phr.) 漏水的水龍頭
2.	border (n.) 邊緣；邊界
3.	timer (n.) 定時器
4.	container (n.) 容器
5.	marker (n.) 標記
6.	a variety of fresh seasonal (adj. phr.) 各種新鮮季節性的
7.	produce (n.) 農產品
8.	fashion (n.) 時尚
9.	brand (n.) 品牌
10.	trend (n.) 趨勢
11.	passed by (v. phr.) 流逝
12.	memories (n.) 回憶
13.	recall (v.) 回想
14.	blurring (adj.) 模糊的
15.	trimming (n.) 修剪
16.	draining (adj.) 耗盡體力的
17.	glaring (adj.) 刺眼的；明顯的
18.	remarks (n.) 言論
19.	occasions (n.) 場合
20.	excessive (adj.) 過度的
21.	furious (adj.) 狂怒的
22.	offensive (adj.) 冒犯的
23.	stubborn (adj.) 頑固的
24.	satisfied (adj.) 滿意的
25.	revised (v.) 修訂
26.	text (n.) 正文
27.	brush (n.) 刷子；畫筆
28.	draft (n.) 草稿
29.	plot (n.) 情節
30.	coating of dust (n. phr.) 一層灰塵
31.	damp wood (n. phr.) 潮濕的木頭
32.	casual (adj.) 隨意的
33.	fragile (adj.) 易碎的
34.	remote (adj.) 偏遠的
35.	vacant (adj.) 空著的
36.	courage (n.) 勇氣
37.	escape (v.) 逃脫
38.	gigantic (adj.) 巨大的
39.	exclusive (adj.) 獨家的
40.	multiple (adj.) 多個的
41.	enormous (adj.) 龐大的
42.	Publicly financed (adj. phr.) 公費資助的
43.	delayed (v./adj.) 延期
44.	resources (n.) 資源
45.	halted (v.) 停止
46.	hatched (v.) 策劃
47.	possessed (v.) 擁有
48.	reinforced (v.) 加強
49.	President (n.) 校長；總統
50.	ceremony (n.) 典禮
51.	presence (n.) 出席
52.	praised (v.) 稱讚
53.	graced (v.) 使增色；光臨
54.	addressed (v.) 演說；處理
55.	credited (v.) 歸功於
56.	sued (v.) 控告
57.	colleagues (n.) 同事
58.	verbally (adv.) 言語上地
59.	dominantly (adv.) 佔優勢地
60.	legitimately (adv.) 合法正當地
61.	relevantly (adv.) 相關地
62.	academic (adj.) 學術的
63.	innovation (n.) 創新
64.	was supposed to (v. phr.) 應該；預期
65.	discussion (n.) 討論
66.	participants (n.) 參與者
67.	intimate (adj.) 親密的；私密的
68.	recording (v-ing/n.) 記錄
69.	periodically (adv.) 定期地；週期性地
70.	subsequent (adj.) 隨後的；後來的
71.	emerging (v-ing/adj.) 浮現的；新興的
72.	Over the course of (prep. phr.) 在…過程中
73.	collective (adj.) 集體的；共同的
74.	transformed (v.) 改變；轉化
75.	scope (n.) 範圍
76.	quality (n.) 品質
77.	approach (n.) 方法
78.	applied (v./adj.) 應用；實用的
79.	multi- (prefix) 多個的
80.	cooperative (adj.) 合作的
81.	institutions (n.) 機構
82.	spread (v./n.) 傳播；伸展
83.	facilitated (v.) 促進；使便利
84.	disrupted (v.) 打斷；中斷
85.	disclosed (v.) 揭露；公開
86.	fulfilled (v.) 履行；實現
87.	circulate (v.) 循環；流通
88.	emphasize (v.) 強調
89.	preserve (v.) 保存；維護
90.	made up for (v. phr.) 補償；彌補
91.	kept track of (v. phr.) 追蹤；記錄
92.	gave rise to (v. phr.) 引起；導致
93.	further (adv./adj.) 進一步地
94.	thus (adv.) 因此
95.	motion sickness (n. phr.) 暈車/船/機
96.	progressing (v-ing) 進展；發展
97.	dizziness (n.) 暈眩
98.	nausea (n.) 噁心；反胃
99.	vomiting (n.) 嘔吐
100.	occurs (v.) 發生
101.	signals (n.) 信號
102.	receives (v.) 接收
103.	brain (n.) 大腦
104.	stationary (adj.) 靜止的
105.	conflicting (adj.) 衝突的；矛盾的
106.	detects (n./v.) 偵測到
107.	microscope (n.) 顯微鏡
108.	reserve (v.) 預訂；保留
109.	row (n.) 排；列
110.	forward (adj.) 前方的
111.	distance (n.) 距離
112.	vehicle (n.) 車輛；交通工具
113.	crash (v./n.) 撞擊；墜毀
114.	flush (v./n.) 臉紅；沖水
115.	burst (v./n.) 爆發；破裂
116.	strike (v./n.) 擊打；罷工
117.	match (v.) 相配；符合
118.	cued (v.) 提示
119.	preventive measures (n. phr.) 預防措施
120.	potential (adj.) 潛在的
121.	advantages (n.) 優點；優勢
122.	as well (adv. phr.) 也；同樣地
123.	by far (adv. phr.) 顯然地；大大地
124.	was supposed to (v. phr.) 應該；預期
125.	discussion (n.) 討論
126.	participants (n.) 參與者
127.	intimate (adj.) 親密的；私密的
128.	recording (v-ing/n.) 記錄
129.	periodically (adv.) 定期地；週期性地
130.	subsequent (adj.) 隨後的；後來的
131.	emerging (v-ing/adj.) 浮現的；新興的
132.	Over the course of (prep. phr.) 在…過程中
133.	collective (adj.) 集體的；共同的
134.	transformed (v.) 改變；轉化
135.	scope (n.) 範圍
136.	quality (n.) 品質
137.	approach (n.) 方法
138.	applied (v./adj.) 應用；實用的
139.	multi- (prefix) 多個的
140.	cooperative (adj.) 合作的
141.	institutions (n.) 機構
142.	spread (v./n.) 傳播；伸展
143.	facilitated (v.) 促進；使便利
144.	disrupted (v.) 打斷；中斷
145.	disclosed (v.) 揭露；公開
146.	fulfilled (v.) 履行；實現
147.	circulate (v.) 循環；流通
148.	emphasize (v.) 強調
149.	preserve (v.) 保存；維護
150.	made up for (v. phr.) 補償；彌補
151.	kept track of (v. phr.) 追蹤；記錄
152.	gave rise to (v. phr.) 引起；導致
153.	further (adv./adj.) 進一步地
154.	thus (adv.) 因此
155.	motion sickness (n. phr.) 暈車/船/機
156.	progressing (v-ing) 進展；發展
157.	dizziness (n.) 暈眩
158.	nausea (n.) 噁心；反胃
159.	vomiting (n.) 嘔吐
160.	occurs (v.) 發生
161.	signals (n.) 信號
162.	receives (v.) 接收
163.	brain (n.) 大腦
164.	stationary (adj.) 靜止的
165.	conflicting (adj.) 衝突的；矛盾的
166.	detects (n./v.) 偵測到
167.	microscope (n.) 顯微鏡
168.	reserve (v.) 預訂；保留
169.	row (n.) 排；列
170.	forward (adj.) 前方的
171.	distance (n.) 距離
172.	vehicle (n.) 車輛；交通工具
173.	crash (v./n.) 撞擊；墜毀
174.	flush (v./n.) 臉紅；沖水
175.	burst (v./n.) 爆發；破裂
176.	strike (v./n.) 擊打；罷工
177.	match (v.) 相配；符合
178.	cued (v.) 提示
179.	preventive measures (n. phr.) 預防措施
180.	potential (adj.) 潛在的
181.	advantages (n.) 優點；優勢
182.	as well (adv. phr.) 也；同樣地
183.	by far (adv. phr.) 顯然地；大大地
184.	cathedrals (n.) 大教堂
185.	Europe (n.) 歐洲
186.	Located (adj.) 位於...的
187.	medieval (adj.) 中世紀的
188.	intricate (adj.) 複雜精細的
189.	architecture (n.) 建築
190.	stained glass (n. phr.) 彩繪玻璃
191.	Mounted (v./adj.) 安裝好的；架設好的
192.	documented (v./adj.) 有紀錄的
193.	vary (v.) 變化；不同
194.	weighs (v.) 重量為
195.	Revolution (n.) 革命
196.	melted (v./adj.) 熔化了的
197.	recast (v.) 重鑄
198.	replaced (v.) 替換
199.	renowned (adj.) 著名的
200.	prayer (n.) 祈禱
201.	signal (v.) 發信號
202.	emergency (n.) 緊急狀況
203.	invasions (n.) 入侵
204.	mourning (n.) 哀悼
205.	royal (adj.) 皇室的
206.	funerals (n.) 葬禮
207.	devastating (adj.) 毀滅性的
208.	complex (adj.) 複雜的
209.	time-consuming (adj.) 費時的
210.	monument (n.) 紀念碑；古蹟
211.	reference (n.) 參考
212.	bearing (n.) 關係；方位
217.	noted (adj.) 有名的
219.	capsule (n.) 膠囊
223.	meant for (v. phr.) 為了…而設計
224.	districts (n.) 區域
225.	populated (adj.) 人口稠密的
230.	crawl (v.) 爬行
232.	rigid (adj.) 固定的
236.	minimalist (adj.) 極簡主義的
240.	Chains (n.) 連鎖店
242.	bare (adj.) 空無一物的
249.	position (n.) 位置；姿勢
250.	budget-conscious (adj.) 有預算意識的
254.	reservation (n.) 預訂
258.	transmit (v.) 傳送
259.	chambers (n.) 房間；室
260.	stacked (v./adj.) 堆疊的
261.	upper (adj.) 上層的
262.	ladder (n.) 梯子
263.	lodging (n.) 住宿
264.	commerce (n.) 商業      
                `
            ; // ★★★ 請將你的單字資料貼在這裡 ★★★
