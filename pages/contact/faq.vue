<template>
    <div>
        
        <main>
            <article>
                <h1>FAQ</h1>
                <p>This is a list of common questions people have when signing up at EOKCA.</p>
            </article>
            <article>                
                <question QUESTION="What is a typical class like?" :ANSWER="['A typical Youth class is one hour long. Most Youth classes start with 15-20 minutes of basics, which works on individual techniques and burns off excess energy. The next 40 minutes will then be dedicated to some combination of kata, bo training, one-steps, and light sparring.','Adult classes are 90-120 minutes long, and will follow a similar order, starting with basics and then focusing on kata, one-steps, weapons, or tuite.']" INDEX="0" />
                <question QUESTION="How does curriculum change for different students?" :ANSWER="['We understand that not every student has the same body, and that some techniques will work differently (or not at all) for some students.','If a student is having difficulty with a technique due to physical differences between themsleves and their training partner, then we will teach a modified version of the technique alongside, but not in place of, the original. Students will still be expected to know the original technique for testing purposes, but may demonstrate the modified version at that time as well.','There is also a change between Youth and Adult in curriculum. Youth students are still growing, so we de-emphasize power and hurting your opponent in favor of emphasized technique, discipline, and respect.']" INDEX="1" />
                <question QUESTION="When will I test? Should I ask to be tested?" :ANSWER="['There are minimum tenures for each grade that can be located on our Testing page. Your test will occur no sooner than what is stated on that page, and you will test at Sensei Rick`s discretion.','It is considered impolite to ask when your next test will be, as there is an implied distrust of our judgement. If we believe you are about ready to test, then you will know when we either start asking how long it has been since you last tested, or we ask for the Federation testing fee.']" INDEX="2" />
                <question QUESTION="How 'in shape' do I have to be to train?" :ANSWER="['You do not have to be in-shape to join; in fact, we have had a few students who had the goal of replacing fat weight with muscle weight.','As long as a physician would not oppose you joining, then you are in the right shape.']" INDEX="3" />
                <question QUESTION="Will I need a uniform?" :ANSWER="['We encourage students to try a class first before they make the financial commitment to buying a uniform. Bring normal workout clothing to your first few sessions.','If you decide to join, a white gi with the dojo and federation patches either sewn on or embroidered will be required for your first test.']" INDEX="4" />
                <question QUESTION="Which style is the best style? How does this compare to other styles?" :ANSWER="['There is no one best style, just as there is no best tool to do every job. Each style has advantages and disadvantages, and learning about them will help you select the style that is right for you.','Our style focuses on muscle memory, reflexes, balance, and being prepared to fight so that, in case you are attacked, you are in the best situation to defend yourself.']" INDEX="5" />
                <question QUESTION="What if I can't make every class?" :ANSWER="['We encourage you to take days off - after all, 5 days a week of intense training is tough to consistently do. Just know that going too long without practice will hurt your technique and thus your chance at promotion.']" INDEX="6" />
                <question QUESTION="Do I need knowledge of etiquette in advance?" :ANSWER="['If you are brand new to formal martial arts, you do not need to walk in knowing everything on Day 1. It would be weird if you knew everything on Day 1. We will cover specific situatiosn with you as the need arises.','If you are really worried about acting correctly, then you can head to our Resources page to learn more.']" INDEX="7" />
                <question QUESTION="How long until I become a black belt?" :ANSWER="['A black belt is a journey not easily plottable on a calendar.','If you show up reguarly to class, and are quickly proficient in the techniques we teach, then you could theoretically reach black belt in just over 2 years. The reality is that it will take a lot longer - closer to 5-7 years. This is of course, dependent on the student in question.']" INDEX="8" />
                <question QUESTION="What do I do if I am coming from another style?" :ANSWER="['If you are coming from another style, we will respect the knowledge and experience gained from your time there. If you wish to, you may keep your color rank and line up as if you were that rank in our system - however, you will start from 10th Kyu in our system, and regular testing requirements will still apply to you.']" INDEX="9" />
                <question QUESTION="Do I have do to hands-on contact training?" :ANSWER="['We understand that students may have experiences that may make hands-on training uncomfortable for them. Because practical application is a necessity for testing, we will work to help you become comfortable with light physical contact in training.']" INDEX="10" />
            </article>
        </main>
        
    </div>
</template>

<script>
    import question from '~/components/question.vue'
    export default {
    
        components: {
            question
        },
        head() {
            return {
                title: 'FAQ | CMAA',
                meta: [
        { name: 'description', content: 'FAQs at CMAA' },
        
      ],
    
    }
        }
    }
</script>