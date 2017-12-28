package musiteca.musiteca.controller;

import io.jsonwebtoken.Jwts;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import io.jsonwebtoken.SignatureException;

public class TokenFilter extends GenericFilterBean {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;

        String header = req.getHeader("Authorization");
        if(header == null || !header.startsWith("Bearer ")) {
            throw new ServletException("Token inexistente ou inválido.");
        }

        String token = header.substring(7);

        // Verificar se o token é válido
        try {
            Jwts.parser().setSigningKey("banana").parseClaimsJws(token).getBody();
        }catch(SignatureException e) {
            ((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token inválido.");
        }

        chain.doFilter(request, response);
    }
}
