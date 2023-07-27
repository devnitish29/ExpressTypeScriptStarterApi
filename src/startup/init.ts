import { Express } from "express";

const appSetup = (app: Express) => {
    try {
        const PORT = 3000;
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });

    } catch (err: unknown) {
        console.log('Unable to start the app !!!');
        console.error(err);
    }

};

export default appSetup;