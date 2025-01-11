import { jwtVerify, SignJWT } from "jose";

// Create a JWT Token
export async function CreateToken(email, id) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const payload = { email, id };
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER || "your-app")
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME || "1h")
    .sign(secret);

  return token;
}

// Verify JWT Token
export async function VerifyToken(token) {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error("Invalid Token");
  }
}
