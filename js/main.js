const habits = [
    {
        id: 1,
        navName: 'Method 1',
        title: 'Eliminate distractions',
        text: 'Close social media and other apps, silence notifications, and keep your phone hidden from sight in a bag or backpack. Researchers found that cognitive capacity was significantly better when the phone was out of sight, not just turned off. Keep Your primary focus is to complete what you need to do. Shutting off both internal and external disturbances can help you to concentrate.'
        
    },
    {
        id: 2,
        navName: 'Method 2',
        title: 'Reduce multitasking',
        text: "Attempting to perform multiple activities at the same time makes us feel productive. It’s also a recipe for lower focus, poor concentration, and lower productivity. And lower productivity can lead to burnout. Examples of multitasking include listening to a podcast while responding to an email or talking to someone over the phone while writing your report. Such multitasking not only hampers your ability to focus but compromises your work quality."
    },
    {
        id: 3,
        navName: 'Method 3',
        title: 'Practice mindfulness and meditation',
        text: 'Meditating or practicing mindfulness activities can strengthen well-being and mental fitness and improve focus. During the meditation process, our brain becomes calmer and our whole body becomes more relaxed. We focus on our breath during the process so that we will not be distracted by our minds. With practice, we can learn to use our breath to bring our attention back to a particular task so that it can be done well even if we get interrupted.'
    },
    {
        id: 4,
        navName: 'Method 4',
        title: 'Get more sleep',
        text:'Research has shown that such devices emit light towards the blue end of the spectrum. Such light will stimulate your eye retina and prevent the secretion of melatonin that promotes sleep anticipation in the brain. Use a filter or "blue light" glasses to minimize such blue light or avoid all electronic devices before bed. Other ways to improve sleep include avoiding exercise late in the day, staying hydrated throughout the day, using journaling or breathing exercises to quiet the mind, and creating a predictable bedtime routine and schedule.'
    },
    {
        id: 5,
        navName: 'Method 5',
        title: 'Take a short break',
        text:'Researchers have found that our brains tend to ignore sources of constant stimulation. Taking very small breaks by refocusing your attention elsewhere can dramatically improve mental concentration after that. The next time you are working on a project, take a break when you begin to feel stuck. Move around, talk to someone, or even switch to a different type of task. You will come back with a more focused mind to keep your performance high.'
    },
    {
        id: 6,
        navName: 'Method 6',
        title: 'Set a daily priority',
        text:'Write down what you want to accomplish each day, ideally the night before, and identify a single priority that you commit to accomplishing. This will help focus your brain on what matters, tackling the big jobs first and leaving the small stuff till later. Break large tasks into smaller bytes so that you will not be overwhelmed. Identifying true priorities can help relieve distracting anxiety, and achieving small daily goals can wire your brain to achieve success.'
    }
]

const navList = document.querySelector('.navigation__list');
const container = document.querySelector('.container');

const paragraph = document.createElement('p');
const title = document.createElement('h2');

const asideBtn = document.querySelector('.aside-btn');
const navigation = document.querySelector('.navigation');
const startContent = "We’ve all been there: sitting at your desk with an urgent deadline and a wandering mind. Despite your best efforts, things are not progressing. You need to focus on the task in front of you. In this digital world, we are easily distracted. Information is everywhere and we feel the need to deal with increasing and multiple forms of information. The inability to concentrate on the task at hand is one of the maladies of our time--everyone wants to know how to focus better, how to concentrate. Yet, the benefits of improving concentration and focus make it an issue worth addressing."

function generateText() {
    title.classList.add('title-content');
    paragraph.classList.add('content');
    paragraph.textContent = startContent;
    container.appendChild(paragraph);
};

function createNavItem() {
    let content = ''
    habits.forEach(function({id,navName}){
        content += `
        <li class='navigation__list-item'>
        <a data-id="${id}" class="navigation__list-link" href="#">${navName}</a>
        </li>`
    })

    navList.innerHTML = content;
}

function displayHabits(navLink){
    const habit = habits.find(function(el){
        return navLink.dataset.id == el.id;
    })
    if (!habit) {
        return;
    }
    title.innerText = habit.title;
    paragraph.innerText = habit.text;
    container.appendChild(title);
    container.appendChild(paragraph);
}

document.addEventListener("DOMContentLoaded", function(e) {
    generateText();
    createNavItem();

    asideBtn.addEventListener('click', function(e) {
    asideBtn.classList.toggle('clicked');
    navigation.classList.toggle('visible');
    });

    navList.addEventListener('click', function(e) {
    let target = e.target;
    e.preventDefault();

    const navItemActive = document.querySelector('.navigation__list-item.active');
    if (navItemActive) {
        navItemActive.classList.remove('active');
    }

    target.parentNode.classList.add('active');
    displayHabits(target);
    });
});
