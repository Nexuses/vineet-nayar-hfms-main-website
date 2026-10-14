export interface Testimonial {
  id: string
  quote: string
  name: string
  initials: string
}

export interface TestimonialRow {
  id: string
  speed: string
  direction: 'left' | 'right'
  items: Testimonial[]
}

export const TESTIMONIALS_HEADING = {
  titleLead: 'What people are saying',
  titleHighlight: 'about the movement',
  lede: 'Voices from the rooms where the Humans First conversation is already happening.',
} as const

export const TESTIMONIAL_ROWS: TestimonialRow[] = [
  {
    id: 'row-1',
    speed: '360s',
    direction: 'left',
    items: [
          {
                "id": "t1",
                "quote": "\"Humans First, Machines Second\" is a remarkably apt title in the age of AI. Vineet has masterfully woven together his real-life experiences with the challenges and opportunities of the AI era. The book's 30 insightful \"sparks\" are built around personal stories that illustrate how he navigated complex situations and, more importantly, how a Humans First mindset can help us emerge victorious in a world increasingly driven by AI. Each chapter is engaging, thought-provoking, and concludes with three actionable ideas, which makes the book immensely valuable and readers can immediately apply while navigating the corporate world. Having had the privilege of working for Vineet at Comnet, I could relate to many of the experiences and principles he shares. Reading the book felt like revisiting those moments and reflecting on the leadership lessons they offered. It made the book all the more engaging and meaningful. Whether you're a corporate professional, business leader, entrepreneur, or someone simply curious about leading in the AI era, this book offers valuable insights and practical wisdom. It is an inspiring reminder that while technology will continue to evolve, people, empathy, trust, and purpose will always remain at the heart of great leadership and that lasting success will always be built on putting Humans First. A highly recommended read.",
                "name": "Ivy",
                "initials": "IV"
          },
          {
                "id": "t2",
                "quote": "Humans First, Machines Second is a timely and thought-provoking book that offers a refreshing perspective on the relationship between technology and humanity. In an era where artificial intelligence and automation are transforming every aspect of our lives, this book serves as an important reminder that technology should remain a tool to enhance human potential—not replace it. The author masterfully combines practical insights, real-world examples, and a compelling vision for the future. What makes this book stand out is its balanced approach: it embraces innovation while emphasizing the importance of human values, creativity, empathy, and ethical decision-making. This is not just a book about machines—it is a book about what makes us human. Insightful, well-researched, and deeply relevant, Humans First, Machines Second deserves a place on every reader's bookshelf.",
                "name": "Manish Chandak",
                "initials": "MC"
          },
          {
                "id": "t3",
                "quote": "A thought-provoking and easy-to-read book on how AI is changing the way we work and think. I liked how it focuses on using technology to amplify human potential rather than replace it. A good read for anyone interested in AI, leadership and the future of work.",
                "name": "Priyanshu Rastogi",
                "initials": "PR"
          },
          {
                "id": "t4",
                "quote": "Human First, Machines Second is a refreshing and timely read. What I really liked is how simply it brings the conversation around AI and technology back to what matters most — people. The book makes you pause and think about how we can use technology to make work better without losing human judgement, empathy and connection along the way. Easy to read, practical and relevant to the way workplaces are changing today. Definitely worth reading for everyone!!",
                "name": "Nidhi Sharma",
                "initials": "NS"
          },
          {
                "id": "t5",
                "quote": "⭐⭐⭐⭐⭐ A Must-Read for Every Leader in the AI Era Human First, Machine Second is much more than a book about artificial intelligence—it's a powerful guide to leading and thriving in a world where AI is becoming part of everyday work and life. What sets this book apart is its central message: AI is not here to replace human potential but to amplify it. The author brilliantly explains that our greatest strengths—empathy, creativity, critical thinking, judgment, and purpose—remain uniquely human, and these are precisely the qualities that become even more valuable in the age of AI. The writing is practical, insightful, and optimistic. Rather than creating fear about technology, the book offers a balanced perspective on how leaders, professionals, and organizations can embrace AI while keeping people at the center of every decision. The real competitive advantage, as the book rightly emphasizes, comes from combining human brilliance with the power of AI. This book left me with one lasting takeaway: never stop believing in human potential. Technology will continue to evolve, but it is our values, imagination, and leadership that will shape the future. AI should be viewed as a partner that enhances our capabilities, not as a substitute for what makes us uniquely human. I highly recommend Human First, Machine Second to leaders, managers, entrepreneurs, and anyone looking to understand how to harness AI responsibly while preserving the qualities that truly define us. It's an inspiring, thought-provoking, and highly relevant read for the times we live in.",
                "name": "Neha G",
                "initials": "NG"
          },
          {
                "id": "t6",
                "quote": "Human First, Machines Second offers a pragmatic and well-reasoned framework for navigating digital transformation. Rather than leaning into technological sensationalism, the author delivers actionable strategies on leveraging AI and automation to enhance human capability—prioritizing critical thinking, ethics, and emotional intelligence. It is a quick, compelling read that provides immense value for organizational leaders, managers, and strategists aiming to drive innovation while maintaining a human-centered culture. Highly recommended.",
                "name": "Abhishek Rana",
                "initials": "AR"
          },
          {
                "id": "t7",
                "quote": "Humans First, Machines Second is one of those books that is ostensibly about AI but, at a deeper level, is really about leadership, human potential and the choices we make when technology becomes extraordinarily powerful. What I particularly appreciated is that Vineet Nayar does not take an anti-AI position. Instead, he makes a more interesting argument: AI will increasingly become available to everyone, so the differentiator will increasingly be what humans bring to the equation — judgement, empathy, creativity, courage, curiosity, purpose and the ability to challenge what machines produce. The book is structured around 30 \"sparks\", organised into Trust, Empower, Reimagine and Amplify. The format makes it easy to read, but the ideas are not superficial. Many of the stories and observations invite you to pause and reconsider how you lead people, introduce technology and think about organisational change. I especially liked the recurring insistence that humans should not merely remain \"in the loop\" — they should remain responsible for the loop. That distinction becomes increasingly important as AI moves from assisting people to influencing and executing decisions. The book is optimistic without being naïve about technology. Its strongest message, for me, is that AI may change the rules, but it does not eliminate the importance of human judgement and leadership. A thoughtful and very relevant read for leaders, entrepreneurs and anyone trying to make sense of what it means to remain distinctly human in an increasingly AI-driven world. Highly Recommended.",
                "name": "Anil Dhankher",
                "initials": "AD"
          },
          {
                "id": "t8",
                "quote": "Human First, Machines Second is an very inspiring book by Vineet Nayar. It explains the importance of humans in the age of AI. It teaches us how people and technology can work together. I found this book very interesting, inspiring, and useful.",
                "name": "Mamta Verma",
                "initials": "MV"
          },
          {
                "id": "t9",
                "quote": "In an age where machines can think faster, humans must learn to think deeper. Humans First, Machines Second is not simply a book about AI - it is a reminder of what AI cannot replace: human judgment, empathy, curiosity, courage and purpose. The book argues that as intelligent machines become accessible to everyone, technology itself will no longer be the greatest differentiator; the distinctly human qualities we bring to technology will be. Its central message is powerful: the future is not about humans competing against machines, but humans learning to work with machines without losing their humanity.",
                "name": "Pandit Gyan Prakash",
                "initials": "PP"
          },
          {
                "id": "t10",
                "quote": "Humans First, Machines Second is a powerful reminder that digital tools and dashboards can scale operational reach, but they can never replace frontline empathy and judgment. The book empowers the practitioner on the ground rather than reduce them to passive data collectors, making it an essential read for anyone managing grassroots transformation.",
                "name": "Pratibha Thakur",
                "initials": "PT"
          },
          {
                "id": "t11",
                "quote": "Human First and Machine second is very inspiring book, who taught us the real value of human and it tell us that a machine can only generate the answer.",
                "name": "Poonam Singhania",
                "initials": "PS"
          },
          {
                "id": "t12",
                "quote": "An insightful and thought-provoking book that highlights the importance of putting people before technology. This book beautifully explains how human values, empathy, and meaningful relationships are essential for success in the digital age. A highly inspiring read for anyone interested in leadership, teamwork, and personal growth.",
                "name": "Vishal Jaswal",
                "initials": "VJ"
          },
          {
                "id": "t13",
                "quote": "Humans First, Machines Second is an empowering guide to surviving and thriving in the AI revolution. It re-anchors our confidence where it belongs: in human ingenuity and collective trust. A recommended read for anyone wanting to build resilient teams and meaningful careers in the modern age.",
                "name": "Arjun",
                "initials": "AR"
          },
          {
                "id": "t14",
                "quote": "Amidst the prevailing techno-fetishism and apocalyptic conjecture, Vineet Nayar delivers a masterclass in executive lucidity. Humans First, Machines Second deconstructs digital evangelism with surgical poise, advancing an uncompromising thesis: artificial intelligence merely amplifies organizational ethos, multiplying either latent brilliance or institutional pathology. Eschewing pedestrian corporate parlance, Nayar distills decades of boardroom triumphs and grassroots interventions into crystalline axioms. Algorithmic velocity remains utterly inert without the animating force of human agency—discernment, empathy, and moral courage. A concise, impeccably crafted, and deeply consequential treatise for the discerning practitioner.",
                "name": "Arun Bhatt",
                "initials": "AB"
          },
          {
                "id": "t15",
                "quote": "Human 1st, Machine 2nd is an insightful and thought-provoking book that highlights the importance of keeping human values at the center of technology. It emphasizes that machines and AI should support human beings, not replace human thinking, empathy, creativity, and decision-making. I particularly liked the book's message that technology becomes truly meaningful when it is used to empower people and improve their lives. The ideas are highly relevant in today's education system, where technology and AI are becoming an important part of teaching and learning. Overall, the book provides a valuable perspective on how we can balance human intelligence and technology while keeping people at the heart of every decision.",
                "name": "Sangam Trivedi",
                "initials": "ST"
          },
          {
                "id": "t16",
                "quote": "Humans First, Machines Second made me pause and think about the way we are looking at AI today. What I liked most is the reminder that while technology can make us faster and smarter, it cannot replace the very human things that matter — empathy, judgement, curiosity and the ability to connect with people. In a world that is moving so quickly towards AI, the message feels very relevant: use technology to enhance what humans can do, not to forget what makes us human. A thought-provoking read and definitely a conversation starter!",
                "name": "Shelra Dsouza",
                "initials": "SD"
          },
          {
                "id": "t17",
                "quote": "A thought-provoking read on the future of work and AI. The book beautifully highlights that while technology can make us faster and smarter, empathy, creativity, curiosity and human connection remain uniquely valuable.",
                "name": "Aman Yadav",
                "initials": "AY"
          },
          {
                "id": "t18",
                "quote": "विनीत सर की बुक मिली और मैंने 1st चैप्टर खत्म कर लिया। इस चैप्टर में सर ने AI के इस युग को अपने लाइफ एक्सपीरियंस के साथ समझाया है। उन्होंने बताया कि इतनी तेज़ रफ़्तार में भागने के बजाय हमें \"Human Centric Aim\" बनाना होगा। AI रोज़ नया आ रहा है, सब डर रहे हैं कि जॉब ना चली जाए... पर सर ने कहा कि जीतेगा वही जिसकी सोच में पहले इंसान होगा, फिर मशीन। AI की तेज़ रफ़्तार वाली दुनिया में जब सब कुछ धुंधला लग रहा हो, तो सिर्फ एक साफ और इंसान-केंद्रित सोच ही हमें दिशा दे सकती है। सब बहुत तेज़ी से बदल रहा है। हर दिन नए AI टूल, हर हफ्ते बदलती नौकरियां, और पूरी इंडस्ट्री हमारे बोलते-बोलते बदल जा रही है। इससे टीम में डर है - \"क्या AI मुझे रिप्लेस कर देगा?\" ये न संभव है न ज़रूरी। हम और तेज़ भाग सकते हैं। एक साफ Vision रखना। एक इंसान-केंद्रित Vision नॉर्थ स्टार की तरह काम करता है जो तूफान में भी रास्ता दिखाता है। जब कंपनी का Vision \"इंसान पहले, मशीन बाद में\" होता है तो डर खत्म होकर मकसद बन जाता है। टीम को भरोसा मिलता है कि नीचे का नज़ारा कितना भी बदले, मंजिल तय है और उस सफर में उनकी जगह पक्की है। AI युग में जिसके पास सबसे महंगे टूल हैं वो नहीं जीतेगा। जीतेगा वो जो एक मजबूत, इंसान-केंद्रित Vision बनाकर उसे साफ-साफ सबको बताएगा। AI से डरने के बजाय, Vision से उसे लीड करना है। सबसे अच्छी लाइन: \"Ground speed vs Altitude\" का उदाहरण। रफ़्तार के साथ दिशा होना ज़रूरी है। पहला चैप्टर ही सोचने पर मजबूर कर गया। आगे के चैप्टर्स का इंतज़ार.............................",
                "name": "Sandeep",
                "initials": "SA"
          },
          {
                "id": "t19",
                "quote": "A refreshing, story-driven playbook that says: Don't promote AI to the corner office, keep it as your best assistant. Trust in people first, and technology will only amplify it.",
                "name": "Hussain Ali",
                "initials": "HA"
          },
          {
                "id": "t20",
                "quote": "Really good book, very easy to understand and gives a different way of thinking about AI and humans. I really liked the idea of keeping humans first and using machines as a support.",
                "name": "Rakesh Kumar Sharma",
                "initials": "RS"
          },
          {
                "id": "t21",
                "quote": "The 30 ideas presented in Human First, Machine Second were particularly insight. They offered practical and thought-provoking perspectives on fostering creativity and keeping human thinking at the centre of learning.",
                "name": "Ramandeep Kaur",
                "initials": "RK"
          },
          {
                "id": "t22",
                "quote": "A thought provoking book on the need to remember intrinsic human traits like empathy, imagination, intuition and judgement in the age of AI.",
                "name": "Srishti Sharda",
                "initials": "SS"
          },
          {
                "id": "t23",
                "quote": "In the age of AI, the author shows how humans are still at the helm, & how human touch is important in the AI age. A must read for all of you lost in the changing world ushered in by the AI.",
                "name": "Sanghmitra S.",
                "initials": "SS"
          },
          {
                "id": "t24",
                "quote": "What struck me about Human First, Machine Second is how insistently it keeps technology accountable to people instead of letting innovation justify itself. It's not chasing \"advanced\" for its own sake, it keeps circling back to whether something actually helps a person, and that's the part that stuck with me. The book spends real time on understanding users, sitting with failure instead of rushing past it, and treating improvement as ongoing rather than a finish line. That framing lands differently right now, with AI and automation quietly working their way into daily life whether we've thought it through or not. If I had to boil it down to one line: being cutting-edge and being useful aren't the same thing, and mistaking one for the other is an easy trap. The technology worth building is the technology that actually makes someone's life better not just more impressive on paper. Worth picking up if you're anywhere near technology, design, leadership, or innovation; it's practical enough to actually use, not just nod along to.",
                "name": "Shushant",
                "initials": "SH"
          },
          {
                "id": "t25",
                "quote": "I found Human First, Machine Second to be a very interesting and meaningful book. It explains how machines and technology can assist us in our daily lives, yet human thinking, emotions, and values remain crucial. The book also highlights how technology can save time and simplify various tasks, but reminds us not to overlook the importance of human relationships. I believe technology is truly beneficial only when we use it correctly. I appreciated the book's straightforward message: technology should support humans, not control them. After reading it, I felt that we need to learn to use machines wisely and always prioritize humanity. While machines can provide information, humans possess emotions and understanding. The book prompted me to reflect on how we should strike a balance between technology and human values in the future.",
                "name": "Suresh",
                "initials": "SU"
          },
          {
                "id": "t26",
                "quote": "It's not an AI book, but a leadership book for the AI age.",
                "name": "Amazon Customer",
                "initials": "AC"
          },
          {
                "id": "t27",
                "quote": "So reassuring of the power of Humans in this age of AI where everyone is scared that AI will take up our jobs, change communities and social life forever; no that's not gonna happen!!",
                "name": "Gurvinder Singh",
                "initials": "GS"
          },
          {
                "id": "t28",
                "quote": "Human First, Machine Second is an insightful book that explores the relationship between people and technology. It emphasizes an important idea: machines are created to serve humans, not to replace our humanity. One of the strongest aspects of the book is its balanced approach. It does not present machines as something to fear, but instead asks readers to think carefully about how technology should be used. The message that humans must remain responsible for the decisions made with the help of machines is especially relevant in today's world.",
                "name": "Amit Shah",
                "initials": "AS"
          },
          {
                "id": "t29",
                "quote": "The biggest takeaway is this — when everyone has access to powerful machines, the real competitive advantage will be the humans who still have the courage to think differently. Humans First, Machines Second is ultimately less a book about AI and more a book about believing in people. It leaves you not afraid of the future, but curious about it—and, most importantly, reminded that AI may change the rules, but humans still decide who wins.",
                "name": "Kamal Bhatt",
                "initials": "KB"
          },
          {
                "id": "t30",
                "quote": "The section therefore argues for a \"Humans First, Machines Second\" approach: use AI to increase human capability, but do not assume AI can replace the uniquely human ability to notice strange opportunities and turn them into innovative ideas.",
                "name": "Sumit Kumar",
                "initials": "SK"
          },
          {
                "id": "t31",
                "quote": "Feeling truly honoured and delighted to receive the bestseller Humans First, Machines Second. Vineet Sir, it is a privilege to learn from your experiences, thoughts, and visionary leadership. Your perspective on prioritising human uniqueness and potential in this AI-driven era is truly inspiring and thought-provoking. Excited to dive into the book, learn from it, and carry these powerful insights forward in my journey.",
                "name": "Shailendra Singh",
                "initials": "SS"
          },
          {
                "id": "t32",
                "quote": "Humans First — इंसान सबसे पहले। AI कितना भी शक्तिशाली क्यों न हो जाए, हमारी मानवीय सोच, संवेदनशीलता, रचनात्मकता और सही निर्णय लेने की क्षमता हमेशा हमारी सबसे बड़ी ताकत रहेंगी। AI हमारे काम करने के तरीके और नियमों को बदल सकता है, लेकिन दिशा तय करने, नेतृत्व करने और सही निर्णय लेने की जिम्मेदारी इंसान की ही रहेगी।",
                "name": "Rohitash Khowal",
                "initials": "RK"
          },
          {
                "id": "t33",
                "quote": "A thought-provoking read on how AI is reshaping the way we work, think and lead. What I loved most is that it doesn't treat AI as a replacement for humans, but as a tool that can amplify human potential when used thoughtfully. A line I strongly aligned with: \"The future isn't about choosing between humans and machines; it's about making machines work better for humans.\" A valuable read for anyone trying to understand the human side of the AI revolution.",
                "name": "Tanuja Tripathi",
                "initials": "TT"
          }
    ],
  },
  {
    id: 'row-2',
    speed: '300s',
    direction: 'right',
    items: [
          {
                "id": "t34",
                "quote": "Human First, Machines Second is a very inspiring book by Vineet Nayar. It beautifully explains the importance of humans in the age of AI. It teaches us that technology should empower people, not replace them. I found the book simple, thought-provoking, and inspiring.",
                "name": "Tanya Thakur",
                "initials": "TT"
          },
          {
                "id": "t35",
                "quote": "For me, the most important takeaway from the book is that the future should not be a competition between humans and machines. The real opportunity lies in creating a partnership where machines provide speed while humans provide imagination.",
                "name": "Alka",
                "initials": "AL"
          },
          {
                "id": "t36",
                "quote": "Human First, Machine Second by Vineet Nayar is not just a book, but an experience. It beautifully reminds us that machines can make our work easier, but they can never replace humans. Humans will always come first. A very interesting and thought-provoking book—I truly loved reading it!",
                "name": "Lucky",
                "initials": "LU"
          },
          {
                "id": "t37",
                "quote": "AI doesn't fix a broken culture, it just amplifies whatever's already there, good or bad. The book is about 30 \"sparks,\" drawn from the author's real experience at HCL and Sampark Foundation. It's a quick read but genuinely stays with you. Highly recommend for anyone leading teams right now.",
                "name": "Sayani Chandra",
                "initials": "SC"
          },
          {
                "id": "t38",
                "quote": "Humans First, Machines Second is a valuable book for anyone trying to understand the responsible use of AI. Its central message is simple but powerful: machines can increase human capability, but humans must remain responsible for judgment, context and consequences.",
                "name": "Vivek Singh",
                "initials": "VS"
          },
          {
                "id": "t39",
                "quote": "An insightful and thought-provoking read on modern technology.",
                "name": "Saurabh Thakur",
                "initials": "ST"
          },
          {
                "id": "t40",
                "quote": "Human First, Machines Second isn't just a book. It's a playbook — 30 sparks for leaders, technologists, parents, and the next generation to navigate the AI era without losing sight of who's really meant to lead. It's a second book by Vineet Nayar after the roaring success of Employees First, Customers Second, keeping humans at the centre of the theme. Must read!!!",
                "name": "Amit Srivastava",
                "initials": "AS"
          },
          {
                "id": "t41",
                "quote": "A thought-provoking book that reminds us that technology should serve humanity, not replace it. Machines bring efficiency, but empathy, creativity, and human values will always come first. A meaningful and insightful read!",
                "name": "Purushottam Kumar",
                "initials": "PK"
          },
          {
                "id": "t42",
                "quote": "After a long wait, this beautiful book is finally in my hands! \"Humans First, Machines Second\" by the respected Vineet Nayar sir. Holding this book in my hands fills me with both pride and joy. For me, this is not just another book; it marks the beginning of a new journey of learning, reflection, and personal growth. In the age of AI, this book is a powerful reminder that no matter how advanced technology becomes, human thinking, empathy, creativity, and values will always come first. Thank you.",
                "name": "Praveen Nayak",
                "initials": "PN"
          },
          {
                "id": "t43",
                "quote": "Replacing a human with an algorithm can irreversibly destruct humanity; therefore we need a serious debate before it goes out of control. Vineet has taken this massive step with this book. This does not end here, as Vineet has said the Human First movement has to be made a global endeavour. A must read and an important milestone to save humanity.",
                "name": "Anil Kachroo",
                "initials": "AK"
          },
          {
                "id": "t44",
                "quote": "The book gives a thoughtful view of how AI is changing our lives. It reminds us that humans have qualities that machines cannot replace. It's inspiring and a must read.",
                "name": "Amazon Customer",
                "initials": "AC"
          },
          {
                "id": "t45",
                "quote": "Feeling incredibly honoured and deeply grateful to receive a copy of the bestseller Humans First, Machines Second. Thank you, Sir, for the incredible thoughts and your visionary leadership. Your insights on prioritising human uniqueness and potential in an AI-dominated world are both provocative and inspiring. I am excited to dive deep into these learnings and look forward to applying these powerful insights to our ongoing journey. Thank you for always guiding us by example!",
                "name": "Anil Kumar Jainwaan",
                "initials": "AJ"
          },
          {
                "id": "t46",
                "quote": "It is one of the most important books written in the uncertain environment of AI. This book will help millions of youth understand a coping mechanism in an uncertain environment.",
                "name": "Amazon Customer",
                "initials": "AC"
          },
          {
                "id": "t47",
                "quote": "I ordered my copy late last night at 10:30 pm and got it by 7:30 am next morning! My first impression of Humans First, Machines Second is extremely upbeat. The punchy visuals are striking. They make complex ideas immediately accessible, memorable and thought-provoking. Incredibly well compiled and doesn't get boring while reading even for readers like me. Well done Mr. Vineet Nayar. My best wishes.",
                "name": "Vijay K Koul",
                "initials": "VK"
          },
          {
                "id": "t48",
                "quote": "I ordered my HFMS book late last night at 10:30pm and got it by 7:30am today morning! My first impression of Humans First, Machines Second is strikingly positive. Even before engaging deeply with the content, I was captivated by the book's imaginative visual icons and punchy captions. They make complex ideas immediately accessible, memorable and thought-provoking. The design itself reinforces the central message: in the age of AI, technology may amplify possibilities, but it is human imagination, trust, empowerment and courage that will ultimately differentiate winners. A refreshing and creatively presented invitation to rethink leadership and success in an AI-driven world.",
                "name": "Anand Pillai",
                "initials": "AP"
          },
          {
                "id": "t49",
                "quote": "The machine will do the work, but the magic will be done by the person. This book is a must-read for every leader and team member.",
                "name": "Vinayak Kove",
                "initials": "VK"
          },
          {
                "id": "t50",
                "quote": "A really interesting and thoughtful book. It makes you think about how technology is changing our lives and why humans should always come first. Definitely worth reading!",
                "name": "Anuj P.",
                "initials": "AP"
          },
          {
                "id": "t51",
                "quote": "It was an excellent reading this fantastic book which emphasizes on human first in the era of AI.",
                "name": "Shreya Lal",
                "initials": "SL"
          },
          {
                "id": "t52",
                "quote": "Grateful to receive a copy of Humans First, Machines Second—a book that couldn't be more relevant in today's rapidly evolving AI landscape. Thank you, Vineet Nayar, for your constant guidance and visionary leadership. Looking forward to an enriching read and many valuable takeaways.",
                "name": "Satwinder Singh",
                "initials": "SS"
          },
          {
                "id": "t53",
                "quote": "This book brilliantly shifts the focus from technology to human empathy, creativity, and leadership. It is an essential, highly practical guide for anyone wanting to thrive alongside artificial intelligence.",
                "name": "Ashish Mishra",
                "initials": "AM"
          },
          {
                "id": "t54",
                "quote": "A masterclass in modern leadership that puts people back at the center of innovation. Truly a must-read for anyone navigating AI and digital shift without losing the human edge!",
                "name": "Suneeti Saini",
                "initials": "SS"
          },
          {
                "id": "t55",
                "quote": "It's more than a book.",
                "name": "Neel Kuruvemula",
                "initials": "NK"
          },
          {
                "id": "t56",
                "quote": "A thought-provoking read that reminds us technology is most powerful when it enhances, rather than replaces, human judgment and values.",
                "name": "Ananya Painuli",
                "initials": "AP"
          },
          {
                "id": "t57",
                "quote": "The book has successfully changed my viewpoint on things.",
                "name": "Shefali",
                "initials": "SH"
          },
          {
                "id": "t58",
                "quote": "Must read.",
                "name": "Venuprasad Muniswamy",
                "initials": "VM"
          },
          {
                "id": "t59",
                "quote": "It was good.",
                "name": "Anish",
                "initials": "AN"
          },
          {
                "id": "t60",
                "quote": "Interesting book. Vineet Nayar's narrative is excellent.",
                "name": "Kalyanaraman J.",
                "initials": "KJ"
          },
          {
                "id": "t61",
                "quote": "Invaluable book in the era of AI.",
                "name": "H. N. Shankar",
                "initials": "HS"
          },
          {
                "id": "t62",
                "quote": "Human First, Machine Second is such a wonderful book to read, very interesting, best ever book for the AI era. Thankful for this book.",
                "name": "Nidhi",
                "initials": "NI"
          },
          {
                "id": "t63",
                "quote": "A thought-provoking book on how humans can stay ahead in the age of AI. The ideas are practical, easy to understand, and give a fresh perspective on using technology without losing the human touch.",
                "name": "Suraj Chaudhary",
                "initials": "SC"
          },
          {
                "id": "t64",
                "quote": "Best book with great logic, a must read book for all. Go buy this quickly. A beautiful book to go through.",
                "name": "Kunal Wardhan Pandey",
                "initials": "KP"
          },
          {
                "id": "t65",
                "quote": "An insightful and thought-provoking book that beautifully explores what it truly means to put humanity first. Worth reading for anyone who values compassion and human connection.",
                "name": "Divyansh",
                "initials": "DI"
          },
          {
                "id": "t66",
                "quote": "The \"Sparks\" structure is delivered in 30 short, actionable chapters that combine boardroom wisdom with warm personal stories. Instead of teaching you how to compete with machines, it teaches you how to amplify your uniquely human strengths. Actionable frameworks center around four vital pillars: Trust, Empower, Reimagine, and Amplify.",
                "name": "Ashu Khan",
                "initials": "AK"
          }
    ],
  },
]
