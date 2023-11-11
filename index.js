//Headed Puppeteer script to automate the process of booking an appointment.
const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const RecaptchaPlugin = require("puppeteer-extra-plugin-recaptcha");
const colors = require("colors/safe");
const { exec } = require("child_process");

puppeteer.use(StealthPlugin());
puppeteer.use(
  RecaptchaPlugin({
    provider: {
      id: "2captcha",
      token: "", // REPLACE THIS WITH YOUR OWN 2CAPTCHA API KEY ⚡
    },
    visualFeedback: true, // colorize reCAPTCHAs (violet = detected, green = solved)
  })
);
function playSound() {
  // Replace 'sound.mp3' with the actual path to your sound file
  exec("afplay alert.mp3", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error playing sound: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Sound playback error: ${stderr}`);
      return;
    }
  });
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const timeout = 0;
  {
    const targetPage = page;
    const promises = [];
    promises.push(targetPage.waitForNavigation());
    await page.setDefaultNavigationTimeout(0);
    await targetPage.goto(
      "https://sedeclave.dgt.gob.es/WEB_NCIT_CONSULTA/solicitarCita.faces",
      { timeout: 0 }
    );
    await Promise.all(promises);
  }
  let msgErrorElement;
  let tries = 1;
  console.log(
    colors.cyan(
      "\r\n  ____ _____ __ _____ ___  __  __  _      ___ __   __   __   \r\n / _/ |_   _/  \\_   _| _ \\/__\\|  \\| |    (_  /  \\ /  \\ /  \\  \r\n| \\_| | | || /\\ || | | v / \\/ | | ' |____ / / // | // | // | \r\n \\__/_| |_||_||_||_| |_|_\\\\__/|_|\\__|____|___\\__/ \\__/ \\__/  \r\n"
    )
  );
  do {
    const targetPage = page;
    await scrollIntoViewIfNeeded(
      [
        ["aria/Oficina donde desea solicitar la cita (*)"],
        ["#publicacionesForm\\:oficina"],
        ['xpath///*[@id="publicacionesForm:oficina"]'],
        ["pierce/#publicacionesForm\\:oficina"],
      ],
      targetPage,
      timeout
    );
    const element = await waitForSelectors(
      [
        ["aria/Oficina donde desea solicitar la cita (*)"],
        ["#publicacionesForm\\:oficina"],
        ['xpath///*[@id="publicacionesForm:oficina"]'],
        ["pierce/#publicacionesForm\\:oficina"],
      ],
      targetPage,
      { timeout, visible: true }
    );
    await element.click({
      offset: {
        x: 322.0625,
        y: 9.453125,
      },
    });

    {
      const targetPage = page;
      const promises = [];
      promises.push(targetPage.waitForNavigation());
      await scrollIntoViewIfNeeded(
        [
          ["aria/Oficina donde desea solicitar la cita (*)"],
          ["#publicacionesForm\\:oficina"],
          ['xpath///*[@id="publicacionesForm:oficina"]'],
          ["pierce/#publicacionesForm\\:oficina"],
        ],
        targetPage,
        timeout
      );
      const element = await waitForSelectors(
        [
          ["aria/Oficina donde desea solicitar la cita (*)"],
          ["#publicacionesForm\\:oficina"],
          ['xpath///*[@id="publicacionesForm:oficina"]'],
          ["pierce/#publicacionesForm\\:oficina"],
        ],
        targetPage,
        { timeout, visible: true }
      );
      const inputType = await element.evaluate((el) => el.type);
      if (inputType === "select-one") {
        await changeSelectElement(element, "23");
      } else if (
        [
          "textarea",
          "text",
          "url",
          "tel",
          "search",
          "password",
          "number",
          "email",
        ].includes(inputType)
      ) {
        await typeIntoElement(element, "23");
      } else {
        await changeElementValue(element, "23");
      }
      await Promise.all(promises);
    }
    {
      const targetPage = page;
      await scrollIntoViewIfNeeded(
        [
          ["aria/Tipo de trámite (*)"],
          ["#publicacionesForm\\:tipoTramite"],
          ['xpath///*[@id="publicacionesForm:tipoTramite"]'],
          ["pierce/#publicacionesForm\\:tipoTramite"],
          ["text/-1"],
        ],
        targetPage,
        timeout
      );
      const element = await waitForSelectors(
        [
          ["aria/Tipo de trámite (*)"],
          ["#publicacionesForm\\:tipoTramite"],
          ['xpath///*[@id="publicacionesForm:tipoTramite"]'],
          ["pierce/#publicacionesForm\\:tipoTramite"],
          ["text/-1"],
        ],
        targetPage,
        { timeout, visible: true }
      );
      await element.click({
        offset: {
          x: 54.28125,
          y: 9.578125,
        },
      });
    }
    {
      const targetPage = page;
      const promises = [];
      promises.push(targetPage.waitForNavigation());
      await scrollIntoViewIfNeeded(
        [
          ["aria/Tipo de trámite (*)"],
          ["#publicacionesForm\\:tipoTramite"],
          ['xpath///*[@id="publicacionesForm:tipoTramite"]'],
          ["pierce/#publicacionesForm\\:tipoTramite"],
          ["text/-1"],
        ],
        targetPage,
        timeout
      );
      const element = await waitForSelectors(
        [
          ["aria/Tipo de trámite (*)"],
          ["#publicacionesForm\\:tipoTramite"],
          ['xpath///*[@id="publicacionesForm:tipoTramite"]'],
          ["pierce/#publicacionesForm\\:tipoTramite"],
          ["text/-1"],
        ],
        targetPage,
        { timeout, visible: true }
      );
      const inputType = await element.evaluate((el) => el.type);
      if (inputType === "select-one") {
        await changeSelectElement(element, "3");
      } else if (
        [
          "textarea",
          "text",
          "url",
          "tel",
          "search",
          "password",
          "number",
          "email",
        ].includes(inputType)
      ) {
        await typeIntoElement(element, "3");
      } else {
        await changeElementValue(element, "3");
      }
      await Promise.all(promises);
    }
    {
      const targetPage = page;
      await scrollIntoViewIfNeeded(
        [
          ["aria/País (*)"],
          ["#publicacionesForm\\:pais"],
          ['xpath///*[@id="publicacionesForm:pais"]'],
          ["pierce/#publicacionesForm\\:pais"],
          ["text/-1"],
        ],
        targetPage,
        timeout
      );
      const element = await waitForSelectors(
        [
          ["aria/País (*)"],
          ["#publicacionesForm\\:pais"],
          ['xpath///*[@id="publicacionesForm:pais"]'],
          ["pierce/#publicacionesForm\\:pais"],
          ["text/-1"],
        ],
        targetPage,
        { timeout, visible: true }
      );
      await element.click({
        offset: {
          x: 256.0625,
          y: 7.078125,
        },
      });
    }
    {
      const targetPage = page;
      await scrollIntoViewIfNeeded(
        [
          ["aria/País (*)"],
          ["#publicacionesForm\\:pais"],
          ['xpath///*[@id="publicacionesForm:pais"]'],
          ["pierce/#publicacionesForm\\:pais"],
          ["text/-1"],
        ],
        targetPage,
        timeout
      );
      const element = await waitForSelectors(
        [
          ["aria/País (*)"],
          ["#publicacionesForm\\:pais"],
          ['xpath///*[@id="publicacionesForm:pais"]'],
          ["pierce/#publicacionesForm\\:pais"],
          ["text/-1"],
        ],
        targetPage,
        { timeout, visible: true }
      );
      const inputType = await element.evaluate((el) => el.type);
      if (inputType === "select-one") {
        await changeSelectElement(element, "44");
      } else if (
        [
          "textarea",
          "text",
          "url",
          "tel",
          "search",
          "password",
          "number",
          "email",
        ].includes(inputType)
      ) {
        await typeIntoElement(element, "44");
      } else {
        await changeElementValue(element, "44");
      }
    }
    {
      const targetPage = page;
      const promises = [];
      promises.push(targetPage.waitForNavigation());
      await console.log("Solving captcha...");
      await page.solveRecaptchas();
      await console.log("Captcha solved!");
      await scrollIntoViewIfNeeded(
        [
          ["aria/Continuar"],
          ["#publicacionesForm\\:j_id68 input"],
          ['xpath///*[@id="publicacionesForm:j_id70"]/input'],
          ["pierce/#publicacionesForm\\:j_id68 input"],
          ["text/Continuar"],
        ],
        targetPage,
        timeout
      );
      const element = await waitForSelectors(
        [
          ["aria/Continuar"],
          ["#publicacionesForm\\:j_id68 input"],
          ['xpath///*[@id="publicacionesForm:j_id70"]/input'],
          ["pierce/#publicacionesForm\\:j_id68 input"],
          ["text/Continuar"],
        ],
        targetPage,
        { timeout, visible: true }
      );
      await element.click({
        offset: {
          x: 28.109375,
          y: 15.390625,
        },
      });
      await Promise.all(promises);
    }

    msgErrorElement = await page.$("li.msgError");
    if (msgErrorElement) {
      console.log(
        "Error: " +
          (await page.evaluate(
            (element) => element.textContent,
            msgErrorElement
          ))
      );
    } else {
      console.log("Success!");
      for (let i = 0; i < 6; i++) {
        playSound();
      }
      break;
    }
    await console.log("Waiting 2 minutes to try again...");
    await page.waitForTimeout(120000);
    await console.log("Trying again... try number " + tries + "...");
  } while (msgErrorElement && tries++ < 5);
  console.log("Executed five times, exiting...");

  async function waitForSelectors(selectors, frame, options) {
    for (const selector of selectors) {
      try {
        return await waitForSelector(selector, frame, options);
      } catch (err) {
        console.error(err);
      }
    }
    throw new Error(
      "Could not find element for selectors: " + JSON.stringify(selectors)
    );
  }

  async function scrollIntoViewIfNeeded(selectors, frame, timeout) {
    const element = await waitForSelectors(selectors, frame, {
      visible: false,
      timeout,
    });
    if (!element) {
      throw new Error("The element could not be found.");
    }
    await waitForConnected(element, timeout);
    const isInViewport = await element.isIntersectingViewport({ threshold: 0 });
    if (isInViewport) {
      return;
    }
    await element.evaluate((element) => {
      element.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "auto",
      });
    });
    await waitForInViewport(element, timeout);
  }

  async function waitForConnected(element, timeout) {
    await waitForFunction(async () => {
      return await element.getProperty("isConnected");
    }, timeout);
  }

  async function waitForInViewport(element, timeout) {
    await waitForFunction(async () => {
      return await element.isIntersectingViewport({ threshold: 0 });
    }, timeout);
  }

  async function waitForSelector(selector, frame, options) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to waitForSelector");
    }
    let element = null;
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (element) {
        element = await element.waitForSelector(part, options);
      } else {
        element = await frame.waitForSelector(part, options);
      }
      if (!element) {
        throw new Error("Could not find element: " + selector.join(">>"));
      }
      if (i < selector.length - 1) {
        element = (
          await element.evaluateHandle((el) =>
            el.shadowRoot ? el.shadowRoot : el
          )
        ).asElement();
      }
    }
    if (!element) {
      throw new Error("Could not find element: " + selector.join("|"));
    }
    return element;
  }

  async function waitForElement(step, frame, timeout) {
    const {
      count = 1,
      operator = ">=",
      visible = true,
      properties,
      attributes,
    } = step;
    const compFn = {
      "==": (a, b) => a === b,
      ">=": (a, b) => a >= b,
      "<=": (a, b) => a <= b,
    }[operator];
    await waitForFunction(async () => {
      const elements = await querySelectorsAll(step.selectors, frame);
      let result = compFn(elements.length, count);
      const elementsHandle = await frame.evaluateHandle((...elements) => {
        return elements;
      }, ...elements);
      await Promise.all(elements.map((element) => element.dispose()));
      if (result && (properties || attributes)) {
        result = await elementsHandle.evaluate(
          (elements, properties, attributes) => {
            for (const element of elements) {
              if (attributes) {
                for (const [name, value] of Object.entries(attributes)) {
                  if (element.getAttribute(name) !== value) {
                    return false;
                  }
                }
              }
              if (properties) {
                if (!isDeepMatch(properties, element)) {
                  return false;
                }
              }
            }
            return true;

            function isDeepMatch(a, b) {
              if (a === b) {
                return true;
              }
              if ((a && !b) || (!a && b)) {
                return false;
              }
              if (!(a instanceof Object) || !(b instanceof Object)) {
                return false;
              }
              for (const [key, value] of Object.entries(a)) {
                if (!isDeepMatch(value, b[key])) {
                  return false;
                }
              }
              return true;
            }
          },
          properties,
          attributes
        );
      }
      await elementsHandle.dispose();
      return result === visible;
    }, timeout);
  }

  async function querySelectorsAll(selectors, frame) {
    for (const selector of selectors) {
      const result = await querySelectorAll(selector, frame);
      if (result.length) {
        return result;
      }
    }
    return [];
  }

  async function querySelectorAll(selector, frame) {
    if (!Array.isArray(selector)) {
      selector = [selector];
    }
    if (!selector.length) {
      throw new Error("Empty selector provided to querySelectorAll");
    }
    let elements = [];
    for (let i = 0; i < selector.length; i++) {
      const part = selector[i];
      if (i === 0) {
        elements = await frame.$$(part);
      } else {
        const tmpElements = elements;
        elements = [];
        for (const el of tmpElements) {
          elements.push(...(await el.$$(part)));
        }
      }
      if (elements.length === 0) {
        return [];
      }
      if (i < selector.length - 1) {
        const tmpElements = [];
        for (const el of elements) {
          const newEl = (
            await el.evaluateHandle((el) =>
              el.shadowRoot ? el.shadowRoot : el
            )
          ).asElement();
          if (newEl) {
            tmpElements.push(newEl);
          }
        }
        elements = tmpElements;
      }
    }
    return elements;
  }

  async function waitForFunction(fn, timeout) {
    let isActive = true;
    const timeoutId = setTimeout(() => {
      isActive = false;
    }, timeout);
    while (isActive) {
      const result = await fn();
      if (result) {
        clearTimeout(timeoutId);
        return;
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    throw new Error("Timed out");
  }

  async function changeSelectElement(element, value) {
    await element.select(value);
    await element.evaluateHandle((e) => {
      e.blur();
      e.focus();
    });
  }

  async function changeElementValue(element, value) {
    await element.focus();
    await element.evaluate((input, value) => {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
    }, value);
  }

  async function typeIntoElement(element, value) {
    const textToType = await element.evaluate((input, newValue) => {
      if (
        newValue.length <= input.value.length ||
        !newValue.startsWith(input.value)
      ) {
        input.value = "";
        return newValue;
      }
      const originalValue = input.value;
      input.value = "";
      input.value = originalValue;
      return newValue.substring(originalValue.length);
    }, value);
    await element.type(textToType);
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
