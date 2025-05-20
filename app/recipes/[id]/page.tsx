import Image from "next/image";
import Link from "next/link";

import {
  MdNavigateBefore,
  MdNavigateNext,
  MdRoomService,
  MdTimer,
} from "react-icons/md";

interface RecipeProps {
  params: { id: string };
}

const RecipePage = async ({ params }: RecipeProps) => {
  const id = params.id;
  const apiKey = "e1ed5835f345409480356553738a99df";
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
  );
  const recipe = await response.json();

  const similarRes = await fetch(
    `https://api.spoonacular.com/recipes/${id}/similar?number=2&apiKey=${apiKey}`
  );
  const similar = await similarRes.json();

  return (
    <div className="w-full bg-[#F0EBE1] pt-40 pb-20">
      <div className="w-[90%] mx-auto border px-[40px] py-[64px] rounded-[32px] border-[#262522]/24 ">
        <div className="flex flex-col text-center items-center justify-center  ">
          <button className="px-[16px] py-[8px] rounded-[16px] bg-[#EE6352] font-medium text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] text-[#fffbf2] ">
            RECIPE
          </button>
          <h1 className="font-extrabold text-[38px] md:text-[40px] lg:text-[60px] xl:text-[80px] text-[#262522]">
            {recipe.title}
          </h1>
          <p className="font-normal xl:w-[60%] w-[100%] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[21px] text-[#262522]/60">
            Welcome to Cooks Delight, where culinary dreams come alive! Today,
            we embark on a journey of flavors with a dish that promises to
            elevate your dining experience our Citrus Infusion Delight:{" "}
            {recipe.title}.
          </p>
          <div className="flex  items-center justify-center mt-10 space-x-10 ">
            <div className="flex space-x-2 items-center justify-center ">
              <MdTimer className="size-6 " />
              <p className="font-semibold  text-[18px] text-[#262522]">
                {recipe.readyInMinutes}
              </p>
              <p className="font-semibold   text-[18px] text-[#262522">
                MINUTES
              </p>
            </div>
            <div className="flex space-x-2 items-center justify-center">
              <MdRoomService className="size-6" />
              <p className="font-semibold  text-[18px] text-[#262522]">
                {recipe.servings}
              </p>
              <p className="font-semibold  text-[18px] text-[#262522]">
                SERVES
              </p>
            </div>
          </div>
          <div className="w-[100%] mt-10  ">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={1000}
              height={100}
              className="w-full h-[400px] lg:h-[640px] object-cover rounded-[24px] "
            />
          </div>
        </div>
        <div className=" w-[100%] lg:w-[40%] mt-10 lg:mt-20  px-[16px] py-[24px] rounded-[24px] bg-[#fffbf2] ">
          <h1 className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] xl:text-[18px] text-[#EE6352] ">
            INGREDIENTS
          </h1>
          <ul className="mt-4">
            {recipe.extendedIngredients.map((ing: any) => (
              <li
                className="list-disc ml-4 font-normal text-[16px] md:text-[18px] lg:text-[19px] xl:text-[21px]"
                key={ing.id}
              >
                {ing.original}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5">
          <h1 className="font-bold text-[26px] md:text-[28px] lg:text-[30px] xl:text-[40px] text-[#262522] ">
            INSTRUCTIONS
          </h1>
          {recipe.analyzedInstructions.length > 0 ? (
            <ol className="list-decimal ml-6 space-y-2">
              {recipe.analyzedInstructions[0].steps.map((step: any) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          ) : (
            <p>No instructions available.</p>
          )}
        </div>
        <div className="border-2 rounded-[32px] px-[16px] pt-[40px] mt-10 pb-[16px] border-[#262522]/24 bg-[#F0EBE1]">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h1 className="font-bold text-[26px] md:text-[30px] lg:text-[34px] xl:text-[40px] text-[#262522] ">
              SIMILAR FOODS
            </h1>
          </div>
          <div
            className="grid grid-cols-1  lg:grid-cols-2 gap-[2rem]   w-full   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden  py-4"
            id="container"
          >
            {similar.map((each: any) => {
              return (
                <div
                  key={each.id}
                  className=" flex-shrink-0 flex flex-col shadow-xl border-[#262522]/20  border rounded-[14px]   w-[240px] lg:w-[620px]"
                >
                  <Image
                    src={`https://spoonacular.com/recipeImages/${id}-312x231.${each.imageType}`}
                    alt={each.title}
                    width={600}
                    height={200}
                    className="w-[240px] lg:w-[620px] h-[200px] object-cover  rounded-t-[14px]"
                  />

                  <div className="bg-white flex h-full flex-col rounded-b-[14px] pt-[24px] px-[24px] pb-[16px] space-y-3">
                    <h1 className="font-bold text-[21px] md:text-[22px] lg:text-[24px] xl:text-[24px] text-[#262522] ">
                      {each.title}
                    </h1>

                    <div className="flex flex-col lg:flex-row space-y-3 items-start lg:items-center justify-between lg:mt-10 mt-6">
                      <p className=" font-medium text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] text-[#262522]">
                        {each.readyInMinutes} mins . {each.servings} servings
                      </p>
                      <Link
                        href={`/recipes/${each.id}`}
                        key={each.id}
                        rel="noopener noreferrer"
                        className="border px-[24px] py-[12px] rounded-[24px] border-[#262522] font-medium text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] text-[#262522] "
                      >
                        VIEW RECIPE
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
