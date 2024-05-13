
$(document).ready(function() {
    var home = $('#Home');
    var blogs = $('#Blogs');
    var about = $('#About');

    home.on('click', function() {
        console.log('home clicked');
        window.location.href = 'index.html';
    });

    blogs.on('click', function() {
        console.log('blogs clicked');
        window.location.href = 'blogs.html';
    });

    about.on('click', function() {
        console.log('about clicked');
        window.location.href = 'about.html';
    });
});

var blogBlocks = document.querySelectorAll('.blog-block');
blogBlocks.forEach(function(block, index) {
  block.addEventListener('click', function() {
    window.location.href = 'blog-details.html?blog=' + index;
  });
});


var blogs = [
  {
    title: 'Increase Developer Productivity With Generative ',
    image: 'blogs-image/blog1.avif',
    content: "Software development is undergoing a revolution with the arrival of generative AI (Gen AI). This powerful technology, just a few years old, is rapidly becoming essential for developers. A 2023 report showed that over 60% of developers already use AI for tasks like code analysis, generation, and even self-learning new skills. One example is Devin AI, a tool that can now resolve over 13% of open GitHub issues – a massive leap from the 2% benchmark set in late 2023. This begs the question: will AI eventually write all the code? Our conversation with experienced Toptal developers across various specialties suggests not. While AI excels at automating repetitive tasks and suggesting code, it has limitations. Developers remain crucial for steering the ship. These developers shared how they leverage AI tools like ChatGPT and GitHub Copilot to boost productivity. ChatGPT provides a user-friendly interface for code inquiries, while Copilot suggests code within the developer's environment, leveraging the vast amount of public code on GitHub.The key lies in knowing how to best utilize these AI companions. Developers need to understand what tasks suit AI and how to tailor their input for optimal results. As AI continues to evolve, developers who master these tools will be well-positioned to thrive in the ever-changing software landscape.",
    
  },
  {
    title: 'Using an LLM API As an Intelligent Virtual Assistant for Python Development',
    image: 'blogs-image/blog2.avif',
    content: "Large language models (LLMs) are shaking things up in the world of software development. These AI models, trained on massive amounts of text data, are becoming valuable assistants for programmers. They can't replace human engineers entirely, but they can handle the more routine coding tasks and debugging. Imagine an LLM as a super-powered copywriter for code. It can understand complex instructions and translate them into working code, saving developers time on repetitive tasks. This frees them up to focus on the bigger challenges that require creativity and problem-solving skills  - areas where LLMs still struggle. One way LLMs can be helpful is by generating code to interact with external resources like weather APIs. These APIs provide data, but writing the code to call them can be tedious. With an LLM, developers can simply provide instructions and the LLM can write the initial code. It's like having an extra pair of hands to get the groundwork done. However, don't expect LLMs to be miracle workers. The code they generate needs to be reviewed and tested by a human developer. Additionally, LLMs aren't suited for complex tasks or projects that require unique solutions. Overall, LLMs are a powerful new tool for software developers. They can automate tasks, improve efficiency, and even help with debugging. But it's important to remember that they're assistants, not replacements. Human developers will always be essential for the creative and strategic aspects of software development.",
    
  },
  {
    title: 'Object-Oriented Programming in C#: Building with Reusable Bricks',
    image: 'blogs-image/blog3.png',
    content: "Imagine creating software like a giant Lego castle. Object-oriented programming (OOP) in C# lets you do exactly that!  By using objects as reusable building blocks, you can write cleaner, more manageable code. An object is like a Lego brick - it has its own properties (data) and methods (actions).  Think of a video game - a Player object might store health and position, and have methods to jump or attack.  C# provides classes, blueprints for creating objects, and inheritance, a way to create specialized objects based on existing ones.  Encapsulation keeps your code organized, and polymorphism allows objects to respond differently to the same message. The benefits are numerous.  OOP in C# promotes reusability - write code once and use it everywhere.  It also makes your code cleaner and easier to maintain, and allows your projects to grow organically as you add new objects and features. Ready to start building?  There are many resources available, from Microsoft's official documentation to online courses and books.  With OOP in C#, you'll be well on your way to becoming a software architect!",
    
  },
  {
    title: 'Building Apps Without Breaking a Sweat: The Rise of No-Code Development',
    image: 'blogs-image/blog4.webp',
    content: "No-code development platforms are revolutionizing how software is built.  Imagine anyone, with no coding experience, creating functional apps! These platforms use drag-and-drop interfaces and pre-built features to empower users to design applications, integrate with existing services, and deploy them in a flash. The rise of no-code can be attributed to its accessibility - anyone can build apps, its speed - prototypes and iterations happen much faster, and reduced costs - no professional coders needed! This allows businesses of all sizes, entrepreneurs, and even non-technical users to build internal tools, launch ideas, and automate tasks. However, no-code isn't perfect. Complex applications might require traditional coding for more flexibility, and very large-scale projects may push these platforms to their limits. Additionally, getting too invested in one vendor's ecosystem can make switching platforms difficult later. Despite these limitations, no-code development is here for the long haul. As AI and machine learning become integrated, these platforms will only become more powerful and user-friendly.  This technology has the potential to democratize app creation and unleash a wave of citizen developers!",
    
  },
  {
    title: 'From Waterfall to Agile: Embracing the Flow of Software Development',
    image: 'blogs-image/blog5.jpg',
    content: "Imagine software development as a rushing river. The traditional waterfall method tries to dam up the flow, meticulously planning every step before a single line of code is written.  This rigid approach can lead to delays and missed opportunities as requirements inevitably change. Agile development offers a refreshing alternative.  Instead of a giant dam, it embraces the flow.  Working in short sprints, agile teams release working software iteratively, constantly adapting to feedback and changing priorities.  This collaborative, flexible approach allows for faster development cycles, improved responsiveness to customer needs, and a higher quality final product. Think of building a house.  Waterfall would require a complete blueprint before laying a single brick. Agile would allow adjustments as construction progresses - maybe you decide to add a sunroom halfway through!  This adaptability is key in today's fast-paced software landscape. While agile isn't perfect for every project, it shines in situations with evolving requirements or uncertain user needs.  By embracing the iterative flow of development, teams can deliver value sooner, reduce risks, and ultimately create software that users truly love.  So, ditch the waterfall and ride the agile wave - your software development journey will be smoother and more rewarding.",
    
  },
  {
    title: 'Taming the Testing Beast: Why Automated Testing is Your Secret Weapon',
    image: 'blogs-image/blog6.png',
    content: "Software development can feel like wrestling a ferocious beast. Bugs and errors lurk in every corner, threatening to derail your project.  This is where automated testing becomes your secret weapon. Imagine a tireless training partner for your code. Automated testing tools relentlessly run your software through a gauntlet of tests, identifying bugs and regressions before they wreak havoc.  This frees you, the developer, to focus on innovation and new features, confident in the stability of your codebase. There are many flavors of automated testing, each targeting different aspects of your software.  Unit tests ensure individual components function as intended, while integration tests verify how different parts work together.  Finally, UI (user interface) tests mimic real user interactions, ensuring a smooth and intuitive experience. The benefits of automated testing are undeniable.  It improves code quality, reduces the time spent on manual testing, and allows for faster development cycles.  Additionally, automated tests act as a safety net, catching regressions that might creep in as you add new features. While not a silver bullet, automated testing is a powerful tool in any developer's arsenal.  By incorporating it into your development process, you can tame the testing beast, ensure software quality, and ship with confidence.",
    
  },
  
];

var urlParams = new URLSearchParams(window.location.search);
var blogIndex = urlParams.get('blog');


var blog = blogs[blogIndex];


var blogContainer = document.querySelector('.card-body');
blogContainer.innerHTML = '<img src="' + blog.image + '" alt="' + blog.title + '" class="img-fluid"><h5 class="card-title mt-3">' + blog.title + '</h5><p class="card-text">' + blog.content + '</p>';