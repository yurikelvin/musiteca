package musiteca.musiteca.model.enums;

public enum Role {
    USER("user"),
    GUEST("guest"),
    ADMIN("admin");

    private final String acess;

    Role(String acess) {
        this.acess = acess;
    }

    public String getAcess() {
        return acess;
    }

}
