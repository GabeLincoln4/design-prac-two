import React from 'react';

function TextSection(){

    const text = "Do you have any idea how long it takes those cups to decompose. Hey, you know how I'm, like, always trying to save the planet? Here's my chance. My dad once told me, laugh and the world laughs with you, Cry, and I'll give you something to cry about you little bastard! Forget the fat lady! You're obsessed with the fat lady! Drive us out of here! Yeah, but John, if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists. You're a very talented young man, with your own clever thoughts and ideas. Do you need a manager?"

    return (
        <div className="px-10 text-center text-2xl">
            <p>
                {text}
            </p>
        </div>
    );
}

export default TextSection;