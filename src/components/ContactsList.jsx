import { contacts } from "../constants";
import Button from "./Button";

const ContactsList = () => {
    return (
        <div className="flex gap-[1rem] lg:gap-[7rem] md:flex-wrap md:gap-[2rem] flex-wrap lg:justify-evenly">
            {contacts.map((item) => (
                <div
                  key={item.id}
                  className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
                >
                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                        {item.description}
                    </p>

                    <Button
                        className="w-full mb-6"
                        href={item.link}
                        white={!!item.price}
                    >
                        {item.button}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default ContactsList;
