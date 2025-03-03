function formatedDate(date, locale = "es-ES"){
    const fecha = new Date(date);
    return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(fecha);
}

export default formatedDate;