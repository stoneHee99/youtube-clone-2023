export const showTrending = (req, res) => res.render("home");

export const see = (req, res) => res.render("watch");

export const edit = (req, res) => res.render("edit");

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const remove = (req, res) => res.send("Delete");
